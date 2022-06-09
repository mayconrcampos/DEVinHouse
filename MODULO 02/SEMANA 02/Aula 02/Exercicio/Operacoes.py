"""
    Operações utilizando classe
"""

class Operacoes:
    def __init__(self, n1, n2) -> None:
        self.n1 = n1 
        self.n2 = n2
    
    def getN1(self):
        return self.n1 
    
    def getN2(self):
        return self.n2
    
    """
    Métodos de Operações
    """

    def soma(self):
        return f"{self.getN1()} + {self.getN2()} = {self.getN1() + self.getN2()}"


    def subtracao(self):
        return f"{self.getN1()} - {self.getN2()} = {self.getN1() - self.getN2()}"


    def multiplicacao(self):
        return f"{self.getN1()} * {self.getN2()} = {self.getN1() * self.getN2()}"


    def divisao(self):
        try:
            divisao = self.getN1() / self.getN2()
            return f"{self.getN1()} / {self.getN2()} = {divisao:.2f}"

        except ZeroDivisionError:
            print("Digite números somente acima de 0")

