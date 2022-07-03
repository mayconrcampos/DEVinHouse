import json
from exception import AtributoException
from Endereco import Endereco
import time

class Pessoa:
    def __init__(self) -> None:
        self.id = time.time()
        self.nome = None
        self.celular = None
        self.email = None
        self.endereco = Endereco()

    
    def cadastrar_pessoa(self, nome: str, celular: str, email: str):
        if nome and celular and email:
            self.nome = nome
            self.celular = celular
            self.email = email

            self.endereco.cadastrar_endereco()
           
            print(self.endereco.logradouro, self.endereco.numero, self.endereco.complemento, self.endereco.bairro, self.endereco.cidade, self.endereco.uf)

            self.__salvar_pessoa()
        else:
            raise AtributoException("É preciso preencher todos os campos")
        

    def exibir_pessoa(self):
        try:
            with open(f"/mnt/Arquivos/MEGA/DEVinHouse/MODULO 02/SEMANA 05/Exercicios M2S05/data/pessoa.json", "r") as pessoa:
                p = json.load(pessoa)
            
                print(p)
                return p

        except Exception as erro:
            print("Não existe endereço gravado", erro)


    def __salvar_pessoa(self):
        with open(f"/mnt/Arquivos/MEGA/DEVinHouse/MODULO 02/SEMANA 05/Exercicios M2S05/data/pessoa.json", "w+") as p:
            pessoa = {
                "id": self.id, 
                "nome": self.nome, 
                "celular": self.celular, 
                "email": self.email, 
                "endereco": {
                    "logradouro": self.endereco.logradouro,
                    "numero" : self.endereco.numero,
                    "complemento" : self.endereco.complemento,
                    "bairro" : self.endereco.bairro,
                    "cidade" : self.endereco.cidade,
                    "uf" : self.endereco.uf
                }
            }

            json.dump(pessoa, p)


#pipou = Pessoa()
#pipou.cadastrar_pessoa("Maycon", "48984443857", "maycon@gmail.com")
#pipou.exibir_pessoa()

#p2 = Pessoa()
#p2.cadastrar_pessoa("Sniper", "4832131321", "sniper@gmail.com", e)
#p2.exibir_pessoa()
