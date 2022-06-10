from random import randint, random, randrange, choice, seed, shuffle, sample

# gerando numero aleatorio
aleatorio = randint(1, 100)
print(aleatorio)



randomlist = sample(range(0, 100), 5)
print(randomlist)

# gerando numeros pares
aleatorio = random()
print(f"Aleatório: {aleatorio:.2f}")


items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# embaralhando a lista
print(shuffle(items))

# escolhendo um item da lista de forma aleatoria
print(choice(items))



lista = []

while len(lista) < 6:
    num = randint(1, 60)
    if num not in lista:
        lista.append(num)

        if len(lista) == 6:
            break

print(sorted(lista))