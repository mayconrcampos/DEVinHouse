from random import randint
from api import pegaResultadoLoteriasAPI
import os


dezenas = pegaResultadoLoteriasAPI("mega-sena")

print(dezenas)

dezenas_aleatorias = []
while True:
    print("1. Sortear Dezenas e Comparar com ultimo jogo da MegaSena")
    print("0. Sair")
    dezenas_aleatorias = []

    escolha = input("Opção: ")
    os.system("clear")

    if escolha == "0":
        print("Você saiu do programa")
        break
    

    print(f"Jogo da Mega: {dezenas}")
    if escolha.isnumeric():
        conta = 0
        while len(dezenas_aleatorias) < 6:
            dezena = randint(1, 60)
            if dezena not in dezenas_aleatorias:
                dezenas_aleatorias.append(f"0{dezena}" if dezena < 10  else f"{dezena}")
                conta += 1
            else:
                continue


        acertos = 0

        print("Meus números aleatórios: ", end=" => ")
        for numero in dezenas_aleatorias:
            if numero in dezenas:
                print(f"({numero})", end=" ")
                acertos += 1
            else:
                print(f"{numero}", end=" ")


        print(f" <= Você teve {acertos} acerto(s).\n\n\n\n\n")
