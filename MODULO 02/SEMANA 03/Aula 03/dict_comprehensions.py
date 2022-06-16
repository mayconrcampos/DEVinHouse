"""
Dict Comprehensions
"""


nome = {
    "nome": "maycon",
    "idade": 39,
    "sexo": "muito"
}

valores = {n for n in nome.items()}
print(valores)

numeros = {x:x**x for x in range(20)}
print(numeros)