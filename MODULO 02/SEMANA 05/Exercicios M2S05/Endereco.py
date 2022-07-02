import errno
from exception import AtributoException
import json

class Endereco:
    def __init__(self) -> None:
        self.logradouro = None
        self.numero = None
        self.complemento = None
        self.bairro = None
        self.cidade = None
        self.uf = None

    def cadastrar_endereco(self):
        logradouro = input("Digite o Logradouro: ")
        numero = input("Digite o número: ")
        complemento = input("Digite o complemento: ")
        bairro = input("Digite o bairro: ")
        cidade = input("Digite a cidade: ")
        uf = input("Digite a UF: ")

        if logradouro and numero and complemento and bairro and cidade and uf:
            self.logradouro = logradouro
            self.numero = numero
            self.complemento = complemento
            self.bairro = bairro
            self.cidade = cidade 
            self.uf = uf

            

            self.__salvar_endereco()
        else:
            raise AtributoException("É preciso preencher todos os campos")

    def exibir_endereco(self):
        
        try:
            with open(f"endereco.json", "r") as endereco:

                p = json.load(endereco)
            
                print(p)
                return p

        except Exception as erro:
            print("Não existe endereço gravado")
        
    
    

    def __salvar_endereco(self):
        
        with open(f"endereco.json", "w") as p:
            endereco = {
                "logradouro" : self.logradouro,
                "numero" : self.numero,
                "complemento" : self.complemento,
                "bairro" : self.bairro,
                "cidade" : self.cidade,
                "uf" : self.uf
            }

            json.dump(endereco, p)


e = Endereco()

e.cadastrar_endereco()
e.exibir_endereco()