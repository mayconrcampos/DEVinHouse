from random import randint
from api import pegaResultadoLoteriasAPI
import os


dezenas = pegaResultadoLoteriasAPI("mega-sena")


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
        while len(dezenas_aleatorias) < 6:
            dezena = randint(1, 60)
            if dezena not in dezenas_aleatorias:
                dezenas_aleatorias.append(
                    f"0{dezena}" if dezena < 10 else f"{dezena}")
            else:
                continue

        acertos = 0

        print("Meus números aleatórios: ", end=" => ")
        for numero in dezenas_aleatorias:
            print(f"({numero})" if numero in dezenas else f"{numero}", end=" ")
            acertos += 1 if numero in dezenas else 0
           

        print(f" <= Você teve {acertos} acerto(s).\n\n\n\n\n")
