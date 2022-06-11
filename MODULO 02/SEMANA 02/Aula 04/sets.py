set1 = {1, 2, 4, 6, 8, 3, 144, 7}

# adicionando elementos
set1.add(10)

print(set1)

# adicionando vários elementos de uma vez
set1.update([12, 33, 45, 2, 6, 8])
print(set1)

# removendo item
set1.remove(144)

print(sorted(set1))

lista = [2, 4, 1, 6]
lista.sort(reverse=True)
print(lista)


grupo1 = {1, 2, 4, 6, 8, 10}
grupo2 = {3, 5, 6, 8, 9, 10}

print(grupo1 ^ grupo2)
print(grupo1 | grupo2)
print(grupo1 & grupo2)
print(grupo1 - grupo2)