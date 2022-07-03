from medico import Medico
from paciente import Paciente
import json
from time import time


class Agenda:
    def __init__(self) -> None:
        self.id = time()
        self.crm_medico = None
        self.cpf_paciente = None
        self.dia = None
        self.mes = None
        self.ano = None
        self.hora = None
        self.obs = None

        self.agenda = []

    def cadastrar_agenda(self, medico: Medico, paciente: Paciente, dia: int, mes: int, ano: int, hora: str, obs: str):

        self.crm_medico = medico.crm
        self.cpf_paciente = paciente.cpf
        self.dia = dia
        self.mes = mes
        self.ano = ano
        self.hora = hora
        self.obs = obs

        obj = {
            "crm_medico": self.crm_medico,
            "cpf_paciente": self.cpf_paciente,
            "dia": self.dia,
            "mes": self.mes,
            "ano": self.ano,
            "hora": self.hora,
            "obs": self.obs
        }
        self.agenda.append(obj)

        self.__salvar_agenda()

    def exibir_agenda(self):
        try:
            with open(f"/mnt/Arquivos/MEGA/DEVinHouse/MODULO 02/SEMANA 05/Exercicios M2S05/data/agenda.json", "r") as agenda:
                p = json.load(agenda)

                print(p)
                # return p

        except Exception as erro:
            print(f"ERRO - {erro}")

    def __salvar_agenda(self):
        with open(f"/mnt/Arquivos/MEGA/DEVinHouse/MODULO 02/SEMANA 05/Exercicios M2S05/data/agenda.json", "a") as p:
            json.dump(self.agenda, p)
    

    


