"""
    Chamei o módulo de Operacoes pelo fato de Math já ser o nome da biblioteca padrão Python para operações matemáticas.
"""

from Operacoes import soma, subtracao, multiplicacao, divisao

while True:
    print("1. Soma")
    print("2. Subtração")
    print("3. Multiplicação")
    print("4. Divisão")
    print("0. Sair")
    opcao = input("Informe a Operação: ")

    if opcao == "0":
        print("Você saiu do programa")
        break

    n1 = input("Digite o primeiro número: ")
    n2 = input("Digite o segundo número: ")

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

    match opcao:
        case "1":
            print("Somando....")
            print(soma(n1, n2))

        case "2":
            print("Subtraindo")
            print(subtracao(n1, n2))

        case "3":
            print("Multiplicando")
            print(multiplicacao(n1, n2))

        case "4":
            print("Dividindo")
            print(divisao(n1, n2))

        case _:
            print("Opção inválida")
            break
