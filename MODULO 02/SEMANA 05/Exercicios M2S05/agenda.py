class Agenda:
    def __init__(self, crm_medico: int, cpf_paciente: str, dia: int, mes: int, ano: int, hora: str, obs: str) -> None:
        self.crm_medico = crm_medico
        self.cpf_paciente = cpf_paciente
        self.dia = dia
        self.mes = mes
        self.ano = ano
        self.hora = hora
        self.obs = obs
    
    def cadastrar_agenda(self):
        pass

    def exibir_agenda(self):
        pass

    def __salvar_agenda(self):
        pass
    