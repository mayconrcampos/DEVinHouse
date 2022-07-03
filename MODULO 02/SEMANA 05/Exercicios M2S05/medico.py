from pessoa import Pessoa
from Endereco import Endereco
import json
from exception import AtributoException
from time import time


class Medico(Pessoa):
    def __init__(self) -> None:
        self.id = None
        self.crm = None
        self.telefone_sec = None
        self.endereco = Endereco()
        self.medicos = []

    def cadastrar_medico(self, nome: str, celular: str, email: str, crm: str, telefone_sec: str):
        if nome and celular and email and crm and telefone_sec:
            self.id = time()
            self.nome = nome
            self.celular = celular
            self.email = email
            self.crm = crm
            self.telefone_sec = telefone_sec

            print("Preencha com o endereço do Médico")

            self.endereco.cadastrar_endereco()

            self.__salvar_medico()
        else:
            raise AtributoException("É preciso preencher todos os campos")

    def exibir_medico(self):
        try:
            with open(f"/mnt/Arquivos/MEGA/DEVinHouse/MODULO 02/SEMANA 05/Exercicios M2S05/data/medicos.json", "r") as medico:
                self.medicos = json.load(medico)

                print("LISTANDO TODOS OS MÉDICOS CADASTRADOS".center(100, "-"))

                for medico in self.medicos:
                    print("DADOS PESSOAIS".center(100, "-"))
                    print(f"\nid      : {medico['id']:>30}", end=" | ")
                    print(f"NOME    : {medico['nome']:>30}\n")
                    print(f"CELULAR : {medico['celular']:>30}", end=" | ")
                    print(f"EMAIL   : {medico['email']:>30}\n")
                    print(f"CRM     : {medico['crm']:>30}", end=" | ")
                    print(f"FONE 2  : {medico['telefone_sec']:>30}")
                    print("ENDEREÇO".center(100, "-"))
                    print(
                        f"LOGRADOURO  : {medico['endereco']['logradouro']:>30}", end=" | ")
                    print(
                        f"NUMERO      : {medico['endereco']['numero']:>30}\n")
                    print(
                        f"COMPLEMENTO : {medico['endereco']['complemento']:>30}", end=" | ")
                    print(
                        f"BAIRRO      : {medico['endereco']['bairro']:>30}\n")
                    print(
                        f"CIDADE      : {medico['endereco']['cidade']:>30}", end=" | ")
                    print(f"UF          : {medico['endereco']['uf']:>30}\n")
                    print("-".center(100, "-"))

        except Exception as erro:
            print(f"ERRO! Não existem médicos cadastrados - {erro}")

    def __salvar_medico(self):
        with open(f"/mnt/Arquivos/MEGA/DEVinHouse/MODULO 02/SEMANA 05/Exercicios M2S05/data/medicos.json", "w+") as p:
            medico = {
                "id": self.id,
                "nome": self.nome,
                "celular": self.celular,
                "email": self.email,
                "crm": self.crm,
                "telefone_sec": self.telefone_sec,
                "endereco": {
                    "logradouro": self.endereco.logradouro,
                    "numero": self.endereco.numero,
                    "complemento": self.endereco.complemento,
                    "bairro": self.endereco.bairro,
                    "cidade": self.endereco.cidade,
                    "uf": self.endereco.uf
                }
            }

            self.add_medicos(medico)

            json.dump(self.medicos, p)
            self.set_none()

    def add_medicos(self, obj):
        self.medicos.append(obj)

    def set_none(self):
        id = None
        self.id = None
        self.nome = None
        self.celular = None
        self.email = None
        self.crm = None
        self.telefone_sec = None

    def seleciona_medico(self):
        try:
            with open(f"/mnt/Arquivos/MEGA/DEVinHouse/MODULO 02/SEMANA 05/Exercicios M2S05/data/medicos.json", "r") as medico:
                self.medicos = json.load(medico)

                print("SELECIONE O MÉDICO".center(100, "-"))

                id = None
                for medico in self.medicos:
                    print("DADOS PESSOAIS".center(100, "-"))
                    print(f"\nid      : {medico['id']:>30}", end=" | ")
                    print(f"NOME    : {medico['nome']:>30}\n")
                    print(f"CRM     : {medico['crm']:>30}")

                    seleciona = input(
                        "ENTER pra Continuar\nS pra Selecionar: ")

                    if seleciona not in "":
                        id = medico['id']
                        self.id = medico['id']
                        self.nome = medico['nome']
                        self.celular = medico['celular']
                        self.email = medico['email']
                        self.crm = medico['crm']
                        self.telefone_sec = medico['telefone_sec']
                        
                        print(f"MÉDICO: {self.nome} CRM: {self.crm} SELECIONADO")
                        break

                    else:
                        continue

                if self.id != None:

                    return True
                else:
                    return False

        except Exception as erro:
            print(f"ERRO! Não existem médicos cadastrados - {erro}")


#med = Medico()
#med.cadastrar_medico("Benhur", "48984445454", "benhur@gmail.com", "53452345", "04823411992")
# med.exibir_medico()
