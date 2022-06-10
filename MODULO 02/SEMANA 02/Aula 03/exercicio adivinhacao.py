"""
    Construindo um jogo de adivinhação em Python
"""
from random import randint
import os

num_aleatorio = randint(1, 50)
tentativa = 1
numeros_chutados = []

while True:
    print("Adivinhe o número entre 1 e 50!!\n\n")
    print(f"Números Jogados: {numeros_chutados}" if len(
        numeros_chutados) > 0 else "")

    chute = input(f"Tentativa {tentativa}: ")
    os.system("clear")

    if chute.isnumeric() and int(chute) > 0 and int(chute) < 50:
        if int(chute) < num_aleatorio:
            print(f"{chute}! Você errou pra menos!")
            tentativa += 1
            numeros_chutados.append(int(chute))

            if tentativa == 6:
                print(f"Você perdeu! O número era {num_aleatorio}\n\n\n")
                continua = input("Deseja continuar? s ou n: ")
                if continua in "sS":
                    numeros_chutados = []
                    tentativa = 1
                    num_aleatorio = randint(1, 50)
                else:
                    print("Você saiu do programa")
                    break

        elif int(chute) > num_aleatorio:
            print(f"{chute}! Você errou pra mais!")
            tentativa += 1
            numeros_chutados.append(int(chute))

            if tentativa == 6:
                print(f"Você perdeu! O número era {num_aleatorio}\n\n\n")

                continua = input("Deseja continuar? s ou n: ")
                if continua in "sS":
                    numeros_chutados = []
                    tentativa = 1
                    num_aleatorio = randint(1, 50)
                else:
                    print("Você saiu do programa")
                    break

        else:
            print(f"{chute}!!!! Parabéns! Você acertou na {tentativa}º tentativa!!\n\n\n")

            continua = input("Deseja continuar? s ou n: ")
            if continua in "sS":
                numeros_chutados = []
                tentativa = 1
                num_aleatorio = randint(1, 50)
            else:
                print("Você saiu do programa")
                break
    else:
        print("Somente números entre 1 a 50")
