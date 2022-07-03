from pessoa import Pessoa
import json
from exception import AtributoException
from Endereco import Endereco
from time import time


class Paciente(Pessoa):
    def __init__(self) -> None:
        self.id = None
        self.rg = None
        self.cpf = None
        self.telefone = None
        self.convenio = None
        self.data_nasc = None
        self.endereco = Endereco()
        self.pacientes = []

    def cadastrar_paciente(self, nome: str, celular: str, email: str, rg: str, cpf: str, telefone: str, convenio: str, data_nasc: str):
        if nome and celular and email and rg and cpf and telefone and convenio and data_nasc:
            self.id = time()
            self.nome = nome
            self.celular = celular
            self.email = email
            self.rg = rg
            self.cpf = cpf
            self.telefone = telefone
            self.convenio = convenio
            self.data_nasc = data_nasc

            print("Preencha com o endereço do Paciente")

            self.endereco.cadastrar_endereco()

            self.__salvar_paciente()
        else:
            raise AtributoException("É preciso preencher todos os atributos")

    def exibir_paciente(self):
        try:
            with open(f"/mnt/Arquivos/MEGA/DEVinHouse/MODULO 02/SEMANA 05/Exercicios M2S05/data/pacientes.json", "r") as paciente:
                self.pacientes = json.load(paciente)

                print("LISTANDO TODOS OS PACIENTES CADASTRADOS".center(100, "-"))

                
                for paciente in self.pacientes:
                    print("DADOS PESSOAIS".center(100, "-"))
                    print(f"\nid      : {paciente['id']:>30}", end=" | ")
                    print(f"NOME    : {paciente['nome']:>30}\n")
                    print(f"CELULAR : {paciente['celular']:>30}", end=" | ")
                    print(f"EMAIL   : {paciente['email']:>30}\n")
                    print(f"RG      : {paciente['rg']:>30}", end=" | ")
                    print(f"CPF     : {paciente['cpf']:>30}\n")
                    print(f"TELEFONE: {paciente['telefone']:>30}", end=" | ")
                    print(f"CONVENIO: {paciente['convenio']:>30}\n")
                    print(f"NASC    : {paciente['data_nasc']:>30}")
                    print("ENDEREÇO".center(100, "-"))
                    print(f"LOGRADOURO  : {paciente['endereco']['logradouro']:>30}", end=" | ")
                    print(f"NUMERO      : {paciente['endereco']['numero']:>30}\n")
                    print(f"COMPLEMENTO : {paciente['endereco']['complemento']:>30}", end=" | ")
                    print(f"BAIRRO      : {paciente['endereco']['bairro']:>30}\n")
                    print(f"CIDADE      : {paciente['endereco']['cidade']:>30}", end=" | ")
                    print(f"UF          : {paciente['endereco']['uf']:>30}\n")
                    print("-".center(100, "-"))

        except Exception as erro:
            print("Não existe endereço gravado", erro)

    def __salvar_paciente(self):
        with open(f"/mnt/Arquivos/MEGA/DEVinHouse/MODULO 02/SEMANA 05/Exercicios M2S05/data/pacientes.json", "w+") as p:
            paciente = {
                "id": self.id,
                "nome": self.nome,
                "celular": self.celular,
                "email": self.email,
                "rg": self.rg,
                "cpf": self.cpf,
                "telefone": self.telefone,
                "convenio": self.convenio,
                "data_nasc": self.data_nasc,
                "endereco": {
                    "logradouro": self.endereco.logradouro,
                    "numero": self.endereco.numero,
                    "complemento": self.endereco.complemento,
                    "bairro": self.endereco.bairro,
                    "cidade": self.endereco.cidade,
                    "uf": self.endereco.uf
                }
            }

            self.add_pacientes(paciente)

            json.dump(self.pacientes, p)
    
    def add_pacientes(self, obj):
        self.pacientes.append(obj)


#p = Paciente()
#p.cadastrar_paciente("Maycon", "48984445454", "maycon@gmail.com",
#                     "42654444", "037721313131", "4832411515", "unimed", "26/08/1982")
#p.exibir_paciente()
