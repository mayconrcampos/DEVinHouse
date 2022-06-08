def soma(a, b):
    return f"{a} + {b} = {a + b}"


def subtracao(a, b):
    return f"{a} - {b} = {a - b}"


def multiplicacao(a, b):
    return f"{a} * {b} = {a * b}"


def divisao(a, b):
    try:
        divisao = a / b
        return f"{a} / {b} = {divisao}"

    except ZeroDivisionError:
        print("Digite números somente acima de 0")