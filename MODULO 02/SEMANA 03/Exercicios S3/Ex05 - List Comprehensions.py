"""
Refatore o código desenvolvido no exercicio três utilizando compreensão de listas (list comprehensions)

Obs:. É esperado que o retorno seja o mesmo, apenas o que deve mudar é a forma como é declarada a lista.

print(f"O maior elemento de N é {menor} e a sua posição dentro da lista é  {posicaoMenor}")

"""
from random import randint


n = []

for i in range(0, 20):
    n.append(randint(1, 2000))


print(n)
