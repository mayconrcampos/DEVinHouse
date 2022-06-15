"""
Crie um método que leia o arquivo e intere sobre ele printando todas
as linhas no console;
●Crie um método que armazene os nomes em uma lista utilizando list
comprehensions;
"""
import os

with open("nomes.txt") as arquivo:
    listanomes = [nome for nome in arquivo.readlines()]


while True:
    print("1. Procurar por nome")
    print("2. Procurar por país")
    print("3. Listar todos os nomes")
    print("0. sair")
    opcao = input("Opção: ")
    os.system("clear")

    if opcao.isnumeric():
        match opcao:
            case "0":
                print("Você saiu")
                break

            case "1":
                nomep = input("Digite o nome pra procurar: ").lower()

                procurandonomes = [nome for nome in listanomes if nome.lower().split(";")[
                    1].startswith(nomep)]

                print(f"Todos nomes que começam com {nomep}")
                # Printando nomes que começam com B
                for nome in procurandonomes:
                    print(nome)

            case "2":
                pais = input("Digite o país: ").lower()
                nomesporpais = [nome for nome in listanomes if nome.lower().split(";")[
                    2].startswith(pais)]
                print(f"Todos da {pais}")
                # printando nomes de origem Chinesa
                for nome in nomesporpais:
                    print(nome)
            case "3":
                todosOsNomes = [nome for nome in listanomes]
                print("Todos os nomes da lista")
                # Printando todos os nomes
                for nome in todosOsNomes:
                    print(nome)

            case _:
                print("Opção inválida")
