nome = input("Digite seu nome: ")
idade = input("Digite sua idade: ")

if idade.isnumeric() and int(idade) > 0:

    print(f"{nome}!!! Olár Abiguinho! Você tem {int(idade)} anos!! Que velho!")
else:
    print("Idade inválida")