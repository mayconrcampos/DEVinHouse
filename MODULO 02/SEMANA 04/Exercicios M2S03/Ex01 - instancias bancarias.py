"""
Utilizando conceitos de POO, crie um programa bancário que a cada nova declaração seja criada uma instância de uma conta de banco.
"""

class Conta:
    def __init__(self, numero, cliente, saldo) -> None:
        self.numero = numero
        self.cliente = cliente
        self.saldo = saldo



conta1 = Conta("2342", "Maycon", 10000)
conta2 = Conta("1234", "Maria", 5000)


print(conta1, conta2)

print(conta1.numero, conta2.numero)