"""
Modifique o exercício 1 e defina que a construção da instância seja feita com o nome do titular, numero, saldo e limite para a conta.
"""

class Conta:
    def __init__(self, nome, numero, saldo, limite) -> None:
        self.nome = nome 
        self.numero = numero 
        self.saldo = saldo
        self.limite = limite



conta1 = Conta("Maycon", "123456", 10000, 1000)
conta2 = Conta("Maria", "41235", 5000, 500)


print(conta1, conta2)

print(conta1.numero, conta2.numero)