"""
métodos especiais
"""

class Peso:
    def __init__(self, peso) -> None:
        self.peso = peso 
    

    def __str__(self) -> str:
        return str(self.__dict__)
    

    def __lt__(self, other):
        return self.peso < other.peso

    


p = Peso(50)
q = Peso(60)

print(p == q)
print(p)

