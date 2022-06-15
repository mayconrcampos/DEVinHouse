"""
Refatore o código desenvolvido no exercicio três utilizando compreensão de listas (list comprehensions)

Obs:. É esperado que o retorno seja o mesmo, apenas o que deve mudar é a forma como é declarada a lista.

print(f"O maior elemento de N é {menor} e a sua posição dentro da lista é  {posicaoMenor}")

"""
from random import randint

# Gerando lista com 20 elementos
n = [randint(1, 2000) for num in range(0, 20)]
print(f"Array 20 posições: {n}")

# pegando menor valor
menor = [num for num in n if num == min(n)]

# Pegando indice
indice = [x for x in range(len(n)) if n[x] == min(n)]


print(f"O menor elemento de N é {menor[0]} e a sua posição dentro da lista é {indice[0]}.")
