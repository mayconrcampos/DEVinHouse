"""
Defina um dicionário com dados referente a informações de usuário, em um primeiro momento esse dicionário deve conter primeiro nome, segundo nome e idade. Caso queira, adicione novas chaves no dicionário. Após a definição do dicionário, adicione novos dados à aquela chave e imprima o dicionário.

Retorno esperado:
{'primeiro_nome': '', 'segundo_nome': '', 'idade': ''}
{'primeiro_nome': 'Natan', 'segundo_nome': '', 'idade': ''}
{'primeiro_nome': 'Natan', 'segundo_nome': 'Nascimento', 'idade': ''}
{'primeiro_nome': 'Natan', 'segundo_nome': 'Nascimento', 'idade': '23'}

"""

nome = {
    "nome": "",
    "sobrenome": "",
    "idade": ""
}
print(nome)

# Atualizando valores de todas as chaves
nome.update({
    "nome": "Maycon",
    "sobrenome": "Campos",
    "idade": 39
})
print(nome)


# Atualizando o valor da chave idade
nome['idade'] = 40


# Imprimindo dicionário completo
print(nome)



# Lista com dicionarios
#nomes = [
#    {"nome": "Maycon", "sobrenome": "Campos", "idade": 39}
#]
#
#nomes.append({
#    "nome": "Ariana",
#    "sobrenome": "Campos",
#    "idade": 36
#})
#
#print(nomes)
#
#for nome in nomes:
#    print(f"Nome: {nome['nome']} Sobrenome: {nome['sobrenome']} Idade: {nome['idade']}")
