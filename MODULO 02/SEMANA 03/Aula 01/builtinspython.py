"""
    Elemento da tabela ASCII
"""

# Printa o elemento 70 da tabela ASCII
print(chr(70))

# Printa o numero do elemento "M" da tabela ASCII
print(ord("M"))

# Tamanho de string
print(len("Maycon"))

# Casting inteiro para string
print(str(55))


frutas = ["Banana", "Maça", "Pera", "Uva", "Goiaba"]

print([x for x in frutas if x.startswith("Go")])


# fatiamento

minhastringue = "DEVinHouse"

print(minhastringue[2:5])
print(minhastringue[:5])
print(minhastringue[5:])
print(minhastringue[:-1])
print(minhastringue[:])
print(minhastringue[:9])


# replace
print(minhastringue.replace("House", "Casa"))
