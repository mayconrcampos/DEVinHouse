from pessoa import Pessoa
import json
from exception import AtributoException

class Paciente(Pessoa):
    def __init__(self) -> None:
        self.rg = None
        self.cpf = None
        self.telefone = None
        self.convenio = None
        self.data_nasc = None

    def cadastrar_paciente(self, nome:str, celular: str, email: str, rg: str, cpf: str, telefone: str, convenio: str, data_nasc: str):
        if nome and celular and email and rg and cpf and telefone and convenio and data_nasc:
            self.nome = nome
            self.celular = celular
            self.email = email
            self.rg = rg
            self.cpf = cpf
            self.telefone = telefone
            self.convenio = convenio
            self.data_nasc = data_nasc

            self.__salvar_paciente()
        else:
            raise AtributoException("É preciso preencher todos os atributos")

    def exibir_paciente(self):
        try:
            with open(f"paciente-{self.nome}.json", "r") as pessoa:
                p = json.load(pessoa)

                print(p)
                return p
        
        except Exception as erro:
            print(f"ERRO - {erro}")

    def __salvar_paciente(self):
        with open(f"paciente-{self.nome}.json", "w+") as p:
            pessoa = {
                "nome": self.nome,
                "celular": self.celular,
                "email": self.email,
                "rg" : self.rg,
                "cpf": self.cpf,
                "telefone": self.telefone,
                "convenio": self.convenio,
                "data_nasc": self.data_nasc
            }

            json.dump(pessoa, p)


p = Paciente()
p.cadastrar_paciente("Maycon", "48984445454", "maycon@gmail.com", "42654444", "037721313131", "4832411515", "unimed", "26/08/1982")
p.exibir_paciente()
