"""
    Métodos de Classe 
"""


class Pessoa:
    nome = ""

    def __init__(self, nome, idade) -> None:
        self.nome = nome
        self.idade = idade

    def printar(self):
        print(f"Nome: {self.nome} - Idade: {self.idade}")

    @classmethod
    def nome(cls, nome):
        cls.nome = nome
        print(cls.nome)


p = Pessoa("Maycon", 39)
p1 = Pessoa.nome("Maycon")

print(p1)
# p.printar()
# print(p.printar2().nome)
