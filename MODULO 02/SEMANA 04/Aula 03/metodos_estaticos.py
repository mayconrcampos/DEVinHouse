"""
Métodos estáticos e Métodos de classe

@staticmethod

@classmethod

"""


class Pessoa:

    ano = 2022

    def __init__(self, nome, ano_nascimento, cidade) -> None:
        self.nome = nome
        self.ano_nascimento = ano_nascimento
        self.cidade = cidade

    def get_cidade(self):
        print(f"{self.nome} mora em {self.cidade}.")

    @staticmethod
    def get_nome():
        print("Uau!")

    @classmethod
    def get_ano(cls):
        print(f"Ano de {cls.ano}")
    
   
    



p = Pessoa("Maycon", 1982, "Floripa")
p.get_cidade()
Pessoa.get_nome()
Pessoa.get_ano()


