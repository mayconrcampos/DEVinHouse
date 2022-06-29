class Paciente:
    def __init__(self, rg: int, cpf: str, telefone: int, convenio: str, data_nasc: str) -> None:
        self.rg = rg
        self.cpf = cpf
        self.telefone = telefone
        self.convenio = convenio
        self.data_nasc = data_nasc
    
    def cadastrar_paciente(self):
        pass

    def exibir_paciente(self):
        pass

    def __salvar_paciente(self):
        pass