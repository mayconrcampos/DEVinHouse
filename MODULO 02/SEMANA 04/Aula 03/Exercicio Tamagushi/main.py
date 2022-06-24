"""
Crie uma programa que modele um Tamagochi (bichinho virtual), devem ser levadas em conta os seguintes atributos: Nome, Fome (escala de 1 a 5), Saúde (escala de 1 a 5) e Idade. E os métodos: alterar nome, dar comida, dar remédio, retornar nome, retornar idade, retornar saúde e retornar fome.
A cada interação com o bicho virtual deve ser retirado 0.5 ponto da fome e saúde. Informar texto de que está com fome ou com a saúde baixa. 

"""
from os import system
from Tamagushi import Tamagushi

t = Tamagushi()

while True:
    nome = input("Digite o nome: ")

    if len(nome) > 2:
        break
    else:
        print("Digite um nome acima de 2 caracteres")

while True:
    idade = input("Digite a idade: ")
    if idade.isnumeric():
        print(f"Nome: {nome} - Idade: {idade}")
        break
    else:
        print("Digite uma idade válida")

t.setarNome(nome)
t.setarIdade(idade)

while True:
    print("1. Dados do Tamagushi")
    print("-="*10)
    print("2. Brincar")
    print("3. Dar comida")
    print("4. Dar remédio")
    print("5. sair")

    opcao = input("Opção: ")
    system("clear")

    if opcao.isnumeric():
        match opcao:
            case "1":
                print("1. Dados do Tamagushi")
                t.status()

            case "2":
                print("2. Brincar")
                t.brincar()
            case "3":
                print("3. Dar comida")
                t.darComida()
            case "4":
                print("4. Dar remédio")
                t.darRemedio()

            case "5":
                print("Você saiu")
                break
            case _:
                print("Opção inválida!")
                
    else:
        print("ERRO! Somente opções numéricas")
                


    
