"""
Exercicio 11
    Crie uma função chamada media que receba dois valores e realize o calculo de media.

    Cria uma função chamada calcular que receb a função media criada anteriormente.

    Imprima no console  o valor do objeto da função

    Execute a função

    HIGH ORDER FUNCTIONS


"""

def media(n: list):
    media = sum(n) / len(n)

    return sum(n), media


def calcular(func):
    return func



minhalista = [1, 2, 3, 4, 4, 78, 234, 1234 ,456, 567, 45, 2345, 456, 76, 567, 567]

minhafunc = calcular(media)(minhalista)

print(minhafunc)



