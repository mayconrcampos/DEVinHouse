"""
Funções anônimas lambda

map
reduce
"""

from functools import reduce


somar = lambda x, y : x + y

print(somar(10, 20))

contaLetras = lambda nome: len(nome)

print(contaLetras("Maycon"))


palavras = ["Macaco", "Abelha", "Alface", "Batata", "Orangotango"]

x = list(map(lambda palavra: len(palavra), palavras))

comecaComA = list(map(lambda comA: comA.startswith("A"), palavras))

comessacomA = [p for p in palavras if p.startswith("A")] # Bem melhor esse cara aqui do que o de cima

print(x)

print(comessacomA)
print(comecaComA)


# Reduce
lista = [x for x in range(5)]

def soma(a, b):
    return a + b

somatudo = reduce(soma, lista)

print(somatudo)


