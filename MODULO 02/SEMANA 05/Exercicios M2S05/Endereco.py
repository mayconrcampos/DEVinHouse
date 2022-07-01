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

    def cadastrar_endereco(self,  logradouro, numero, complemento, bairro, cidade, uf):
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
        if self.logradouro and self.numero:
            with open(f"endereco-{self.logradouro}{self.numero}.json", "r") as endereco:
                p = json.load(endereco)

                print(p)
                return p
        
        else:
            raise AtributoException("É preciso Cadastrar endereço antes de Exibir")

    def __salvar_endereco(self):
        
        with open(f"endereco-{self.logradouro}{self.numero}.json", "w+") as p:
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
#e.cadastrar_endereco("Rua Paula Ramos", "316", "Lado 324", "Capoeiras", "Florianópolis", "SC")
e.exibir_endereco()