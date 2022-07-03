from medico import Medico
from paciente import Paciente
import json
from time import time


class Agenda:
    def __init__(self) -> None:
        self.id = None
        self.crm_medico = None
        self.cpf_paciente = None
        self.dia = None
        self.mes = None
        self.ano = None
        self.hora = None
        self.obs = None

        self.agenda = []

    def cadastrar_agenda(self, medico: Medico, paciente: Paciente, dia: int, mes: int, ano: int, hora: str, obs: str):
        self.id = time()
        self.crm_medico = medico.crm
        self.cpf_paciente = paciente.cpf
        self.dia = dia
        self.mes = mes
        self.ano = ano
        self.hora = hora
        self.obs = obs

        self.__salvar_agenda()

    def exibir_agenda(self):
        try:
            with open(f"/mnt/Arquivos/MEGA/DEVinHouse/MODULO 02/SEMANA 05/Exercicios M2S05/data/agenda.json", "r") as agenda:
                self.agenda = json.load(agenda)

                print("LISTANDO TODAS AS CONSULTAS AGENDADAS".center(100, "-"))

                for agenda in self.agenda:
                    print("DADOS DA CONSULTA".center(100, "-"))
                    print(f"id          : {agenda['id']:>30}", end=" | ")
                    print(f"CRM MÉDICO  : {agenda['crm_medico']:>30}\n")
                    print(f"CPF PACIENTE: {agenda['cpf_paciente']:>30}", end=" | ")
                    print(f"DIA         : {agenda['dia']:>30}\n")
                    print(f"MES         : {agenda['mes']:>30}", end=" | ")
                    print(f"ANO         : {agenda['ano']:>30}\n")
                    print(f"HORA        : {agenda['hora']:>30}", end=" | ")
                    print(f"OBSERVAÇÃO  : {agenda['obs']:>30}")                   
                    print("-".center(100, "-"))

        except Exception as erro:
            print(f"Não existe nenhuma consulta agendada - {erro}")

    def __salvar_agenda(self):
        with open(f"/mnt/Arquivos/MEGA/DEVinHouse/MODULO 02/SEMANA 05/Exercicios M2S05/data/agenda.json", "w+") as p:
            agenda = {
                "id": self.id,
                "crm_medico": self.crm_medico,
                "cpf_paciente": self.cpf_paciente,
                "dia": self.dia,
                "mes": self.mes,
                "ano": self.ano,
                "hora": self.hora,
                "obs": self.obs
            }
            self.add_agenda(agenda)
            json.dump(self.agenda, p)
            self.set_none()
        
    def add_agenda(self, obj):
        self.agenda.append(obj)
    

    def set_none(self):
        self.id = None
        self.crm_medico = None
        self.cpf_paciente = None
        self.dia = None
        self.mes = None
        self.ano = None
        self.hora = None
        self.obs = None
    

    


