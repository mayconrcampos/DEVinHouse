"""
    Métodos de Classe 
"""


class Pessoa:
    def __init__(self, nome, idade) -> None:
        self.nome = nome
        self.idade = idade
    
    def printar(self):
        print(f"Nome: {self.nome} - Idade: {self.idade}")

    @classmethod
    def printar2(cls, nome):
        return cls(nome)

    



p = Pessoa("Maycon", 39)
p1 = Pessoa.printar2("Maycon", 39)

print(p1)
#p.printar()
#print(p.printar2().nome)