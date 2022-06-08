"""
 Listas em Python
"""

# declarando lista vazia
from cgi import print_arguments


lista = []

# adicionando numero a lista
lista.append(1)
lista.append(3)
lista.append(2)

print(lista)

#verificando menor valor
print(min(lista))

#verificando maior valor
print(max(lista))

#verificando tamanho da lista
print(len(lista))

# somando todos os itens
print(sum(lista))

# inserindo valor no indice
lista.insert(1, 5)

print(lista)

# ordenando lista
print(sorted(lista))

lista.sort(reverse=True)

print(lista)

# imprimindo item da lista
print(2 in lista)
print(4 in lista)


# removendo valor de lista, se tiver
try:
    lista.remove(4)
except ValueError:
    print("Valor não existe na lista")

print(lista)

# substituindo itens com atribuição

lista[2] = 11

print(lista)

# removendo ultimo item
lista.pop()

print(lista)

# removendo item pelo indice
lista.pop(1)
print(lista)




