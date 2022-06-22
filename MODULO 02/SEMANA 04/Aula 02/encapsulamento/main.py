"""
Aprendendo Encapsulamento em Python
"""

class Conta:
    def __init__(self, nome, agencia, conta, limite) -> None:
        self.nome = nome
        self.agencia = agencia
        self.conta = conta
        self.limite = limite
        self.__saldo = 0

    @property
    def saldo(self):
        return self.__saldo

    @saldo.setter    
    def saldo(self, valor):
        raise ValueError("Impossivel alterar saldo diretamente. Use a função depositar ou sacar")
    
    def depositar(self, valor):
        self.__saldo += valor 
    
    def sacar(self, valor):
        saque = self.saldo - valor
        if saque >= 0 - self.limite:
            self.__saldo -= valor
        else:
            print("Saldo insuficiente")
    


c = Conta("Maycon", "09128", "0001", 500)

c.depositar(1000)
print(c.saldo)
c.sacar(1499)
print(c.saldo)