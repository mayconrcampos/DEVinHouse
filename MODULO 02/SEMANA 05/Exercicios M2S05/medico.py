from pessoa import Pessoa

class Medico(Pessoa):
    def __init__(self, crm: int, telefone_sec: int) -> None:
        self.crm = crm
        self.telefone_sec = telefone_sec
    
    def cadastrar_medico(self):
        pass

    def exibir_medico(self):
        pass

    def __salvar_medico(self):
        pass