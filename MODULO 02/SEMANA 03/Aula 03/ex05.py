"""

"""

from posixpath import split


with open("nomes.txt") as arquivo:
    listanomes = {f"id{n}":n for n in arquivo.readlines()}



for item in listanomes.items():
    print(item)