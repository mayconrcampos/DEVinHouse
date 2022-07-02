from medico import Medico
from paciente import Paciente
from Endereco import Endereco
import json

class Agenda:
    def __init__(self, crm_medico: int, cpf_paciente: str, dia: int, mes: int, ano: int, hora: str, obs: str) -> None:
        self.crm_medico = crm_medico
        self.cpf_paciente = cpf_paciente
        self.dia = dia
        self.mes = mes
        self.ano = ano
        self.hora = hora
        self.obs = obs

        self.agenda = []
    
    def cadastrar_agenda(self, medico: Medico, paciente: Paciente, dia: int, mes: int, ano: int, hora:str, obs: str):

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
            with open(f"./data/Agenda.json", "r") as agenda:
                p = json.load(agenda)

                print(p)
                #return p
        
        except Exception as erro:
            print(f"ERRO - {erro}")

    def __salvar_agenda(self):
        with open(f"./data/Agenda.json", "w+") as p:
            json.dump(self.agenda, p)
    


ag = Agenda()

endPaciente = Endereco()
endPaciente.cadastrar_endereco("Rua Paula Ramos", "3013", "casa", "Capoeiras", "Floripa", "SC")

med = Medico()
med.cadastrar_medico("Benhur", "48984445454", "benhur@gmail.com", "53452345", "04823411992")
med.exibir_medico()

#p = Paciente()
#p.cadastrar_paciente("Maycon", "48984445454", "maycon@gmail.com", "42654444", "037721313131", "4832411515", "unimed", "26/08/1982")
##p.exibir_paciente()
#
#ag.cadastrar_agenda(med, p, 25, 12, 2022, "10:00", "Venha de jejum")
#ag.exibir_agenda()
    