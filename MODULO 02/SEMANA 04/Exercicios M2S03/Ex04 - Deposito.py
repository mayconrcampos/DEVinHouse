"""
Construa um método de depósito a conta, tendo como argumento necessário o valor a ser depositado.
"""

class Conta:
    def __init__(self, nome, numero, saldo, limite) -> None:
        self.nome = nome 
        self.numero = numero 
        self.saldo = saldo
        self.limite = limite
    
    def extrato(self):
        print("-------------- Extrato Bancário --------------")
        print(f"Cliente : {self.nome:>34}")
        print(f"Conta   : {self.numero:>34}")
        print(f"Saldo   : R$  {self.saldo:>30.2f}")
        print(f"Limite  : R$ -{self.limite:>30.2f}")
        print("-="*23)
    
    def deposito(self, valor):
        print(f"Cliente: {self.nome:>10} - Depósito no valor de R${valor:.2f}")
        self.saldo += valor




conta1 = Conta("Maycon", "123456", 10000, 1000)
conta2 = Conta("Maria", "41235", 5000, 500)

conta1.deposito(150)
conta2.deposito(250)

conta1.extrato()
conta2.extrato()