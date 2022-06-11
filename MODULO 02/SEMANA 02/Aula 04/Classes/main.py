class Conta:
    def __init__(self, nome, num_conta, saldo, limite) -> None:
        self.nome = nome
        self.num_conta = num_conta
        self.saldo = saldo
        self.limite = limite
    

    def depositar(self, valor):
        if valor > 0:
            self.saldo += valor
        else:
            print("Depósitos somente acima de R$0")
    
    def sacar(self, valor):
        saque = self.saldo - valor
        if saque >= -self.limite:
            self.saldo -= valor
            print(f"Você realizou um saque de R${valor:.2f}.")
        else:
            print("Saldo insuficiente!")

    def extrato(self):
        print(f"Cliente: {self.nome:>20}")
        print(f"Conta: {self.num_conta:>20}")
        print("--------------------------")
        print(f"Saldo: R${self.saldo:>20.2f}")
        print(f"Limite: R${self.limite:>20.2f}")

conta = Conta("Maycon", "1234", 1000, 500)
conta.extrato()
conta.sacar(100)
conta.extrato()

conta.sacar(1401)
conta.extrato()
