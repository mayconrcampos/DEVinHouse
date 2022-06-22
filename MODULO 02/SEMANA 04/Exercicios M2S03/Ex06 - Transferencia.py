"""
Construa um método de transferencia de conta e coloque como parametros de transferencia, o "objeto" relativo a conta que receberá o dinheiro e o valor a ser transferido. Verificar na rotina se a conta1 possui valor a transferir.
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
    
    def saque(self, valor):
        saque = self.saldo - valor
        if saque >= -self.limite:
            print(f"Cliente: {self.nome:>10} - Saque no valor de R${valor:.2f}")
            self.saldo -= valor
        else:
            print("Saldo insuficiente!")

    def transferencia(self, conta, valor):
        transfer = self.saldo - valor
        if transfer >= -self.limite:
            print(f"De      Cliente: {self.nome:>10} - Transferência: R${valor:.2f}")
            print(f"Para    Cliente: {conta.nome:>10} - R${valor:.2f}")
            conta.deposito(valor)
            self.saldo -= valor
        else:
            print(f"Saldo insuficiente!")






conta1 = Conta("Maycon", "123456", 1000, 1000)
conta2 = Conta("Maria", "41235", 1000, 500)

#conta1.deposito(150)
#conta2.deposito(250)

#conta1.saque(11151)
#conta2.saque(1700)
conta2.transferencia(conta1, 100)
conta2.transferencia(conta1, 500)

conta1.extrato()
conta2.extrato()