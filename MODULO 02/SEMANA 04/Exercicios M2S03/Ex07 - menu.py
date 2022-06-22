"""
1 - Saque (perguntar valor a ser sacado)
2 - Depósito (perguntar valor a ser depositado)
3 - Transferência (perguntar valor a ser transferido)
4 - Sair (encerrar aplicação)

E relacione os itens do menu ao programa construído ao longo dos exercícios.

Como está como aprendizado, inicialize duas contas c1 e c2 com um saldo predefinido para continuar a construção do programa. Considere c1 como a conta manipulada e c2 a conta de um cliente que receberá uma eventual transferência.

"""

from os import system


class Conta:
    def __init__(self, nome, numero, saldo=0, limite=0) -> None:
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
            print(
                f"Cliente: {self.nome:>10} - Saque no valor de R${valor:.2f}")
            self.saldo -= valor
        else:
            print("Saldo insuficiente!")

    def transferencia(self, conta, valor):
        transfer = self.saldo - valor
        if transfer >= -self.limite:
            print(
                f"De      Cliente: {self.nome:>10} - Transferência: R${valor:.2f}")
            print(f"Para    Cliente: {conta.nome:>10} - R${valor:.2f}")
            conta.deposito(valor)
            self.saldo -= valor
        else:
            print(f"Saldo insuficiente!")


conta1 = Conta("Maycon", "123456", 1000, 1000)
conta2 = Conta("Maria", "41235", 1000, 500)


while True:
    print("1. Saque")
    print("2. Depósito")
    print("3. Transferência")
    print("4. Extrato")
    print("5. Sair")

    opcao = input("Opção: ")
    system("clear")

    if opcao.isnumeric():
        match opcao:
            case "1":
                print("1. Saque")

                while True:
                    valor = input("Digite o Valor R$: ")

                    for _ in valor:
                        if _ in ",":
                            valor = valor.replace(",", ".")

                    if isinstance(float(valor), float) or isinstance(int(valor), int):
                        conta1.saque(float(valor))
                        conta1.extrato()
                        break
                    else:
                        print("Valor inválido! Somente valores numéricos!")

            case "2":
                print("2. Depósito")

                while True:
                    valor = input("Digite o Valor R$: ")

                    for _ in valor:
                        if _ in ",":
                            valor = valor.replace(",", ".")

                    if isinstance(float(valor), float) or isinstance(int(valor), int):
                        conta1.deposito(float(valor))
                        conta1.extrato()
                        break
                    else:
                        print("Valor inválido! Somente valores numéricos!")

            case "3":
                print("3. Transferência")

                while True:
                    valor = input("Digite o Valor R$: ")

                    for _ in valor:
                        if _ in ",":
                            valor = valor.replace(",", ".")

                    if isinstance(float(valor), float) or isinstance(int(valor), int):
                        conta1.transferencia(conta2, float(valor))
                        conta1.extrato()
                        break
                    else:
                        print("Valor inválido! Somente valores numéricos!")

            case "4":
                print("4. Extratos")

                while True:
                    print("1. Conta1")
                    print("2. Conta2")

                    opc = input("Opção: 1 - 2: ")

                    if opc == "1":
                        conta1.extrato()
                        break
                    elif opc == "2":
                        conta2.extrato()
                        break
                    else:
                        print("Opção inválida!")

            case "5":
                print("5. Você saiu do programa")
                break

            case _:
                print("Opção inválida.")

    else:
        print("ERRO! Opção numérica inválida. Selecione as opções 1, 2, 3 ou 4.")
