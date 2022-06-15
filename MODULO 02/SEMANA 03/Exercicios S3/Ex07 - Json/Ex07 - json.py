"""
Crie um arquivo JSON com valores vazios e as chaves contendo os mesmos valores do exercício 6.

Leia o arquivo, insira dados nas chaves e imprima no terminal.

Obs:. Caso possua problemas com diretórios, utilize o os.path para te auxiliar no acesso ao arquivo.

"""

import json


with open("nome.json", encoding='utf-8') as nomes:
    nomes = json.load(nomes)


nome = input("Digite o nome: ")
sobrenome = input("Digite o sobrenome: ")
idade = input("Digite a idade: ")

if nome:
    nomes['nome'] = nome
else:
    nomes['nome'] = "Algum nome"


if sobrenome:
    nomes['sobrenome'] = sobrenome
else:
    nomes['sobrenome'] = "Algum sobrenome"


if idade:
    nomes['idade'] = idade
else:
    nomes['idade'] = "Bem velho"


print(nomes)

with open("nome.json", "w") as outfile: 
    json.dump(nomes, outfile) 
