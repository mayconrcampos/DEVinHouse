"""
Ex05 - Vogal ou Consoante

Faça um programa que informe se a letra digitada é vogal ou consoante.

Construir a aplicação para que trabalhe de forma sem interrupção automática, construa uma rotina para que a aplicação seja interrompida quando o caractere digitado for "0".
"""

while True:
    letra = input("Digite um caracter, ou 0 pra sair: ")

    if letra == "0":
        print("Você saiu do programa.")
        break

    if len(letra) > 1:
        print("Você digitou mais de um caracter")
        continue

    if letra.isnumeric():
        print("Você digitou número.")
        continue

    if letra in "aeiouáàâãéèíìĩîóòõôúùũû":
        print(f"{letra} é vogal.")

    elif letra in "!@#$%¨&*;:,<>+=/*-?~[]}_{\"\'ºª°¨¬¢£³²¹|":
        print("Você digitou caractere especial.")

    else:
        print(f"{letra} é consoante.")
