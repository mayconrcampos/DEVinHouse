class Aluno:
    def __init__(self, nome: str, dia_nascimento: int, mes_nascimento: int,
                 ano_nascimento: int, matricula: int, cpf: str) -> None:
        self.__nome = nome
        self.__dia_nascimento = dia_nascimento
        self.__mes_nascimento = mes_nascimento
        self.__ano_nascimento = ano_nascimento
        self.__matricula = matricula
        self.__cpf = cpf
        self.nota_final = None
    

    def get_info(self):
        keys = ["nome", "dia_nasc", "mes_nasc", "ano_nasc", "matricula", "cpf", "media"]
        values = [self.__nome, self.__dia_nascimento, self.__mes_nascimento, self.__ano_nascimento, self.__matricula, self.__cpf, self.nota_final]

        return dict(zip(keys, values))
        