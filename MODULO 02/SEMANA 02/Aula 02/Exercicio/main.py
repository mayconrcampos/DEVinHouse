from Operacoes import Operacoes
import os
from time import sleep

while True:
    print("1. Soma")
    print("2. Subtração")
    print("3. Multiplicação")
    print("4. Divisão")
    print("0. Sair")
    opcao = input("Informe a Operação: ")
    os.system("clear")

    if opcao == "0":
        print("Você saiu do programa")
        break

    n1 = input("Digite o primeiro número: ")
    n2 = input("Digite o segundo número: ")
    os.system("clear")

    if n1.isnumeric():
        n1 = int(n1)
    else:
        print("Primeiro Número inválido")
        continue

    if n2.isnumeric():
        n2 = int(n2)
    else:
        print("Segundo Número inválido")
        continue
    
    """
        Palhaçadinhas
    """
    print("Calculando.")
    sleep(1)
    os.system("clear")
    print("Calculando..")
    sleep(1)
    os.system("clear")
    print("Calculando...")
    
    os.system("clear")

    """
        Instanciando Classe e passando n1 e n2
    """
    operacao = Operacoes(n1, n2)

    match opcao:
        case "1":
            print(f"Somando {n1} e {n2}")
            print(operacao.soma())

        case "2":
            print(f"Subtraindo {n1} e {n2}")
            print(operacao.subtracao())

        case "3":
            print(f"Multiplicando {n1} e {n2}")
            print(operacao.multiplicacao())

        case "4":
            print(f"Dividindo {n1} e {n2}")
            print(operacao.divisao())

        case _:
            print("Opção inválida")
            break
