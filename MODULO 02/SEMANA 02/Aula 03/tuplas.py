"""
    Tuplas são iguais as listas no formato...
    Ou seja, um array de dados, porém diferentemente das listas, é imutável, não podendo mudar seus dados em tempo de execução.
"""

tupla1 = tuple([10, 20, 30])
tupla2 = (1, 2, 3)

tupla3 = 2,


print(tupla1)
print(tupla2)
print(type(tupla3))


from collections import namedtuple

Estados = namedtuple("Estados", ["sigla", "nome", "regiao"])

Estado_SC = Estados("SC", "Santa Catarina", "Sul")
Estado_RS = Estados("RS", "Rio Grande do Sul", "Sul")
Estado_PR = Estados("PR", "Paraná", "Sul")

print(Estado_SC.sigla, Estado_SC.nome, Estado_SC.regiao)
print(Estado_RS.sigla, Estado_RS.nome, Estado_RS.regiao)
print(Estado_PR.sigla, Estado_PR.nome, Estado_PR.regiao)


"""
lista dentro de tupla
"""

tuplista = ([1, 2, 3], [4, 5, 6])

tuplista[0][0] = 4
print(tuplista)

# sim, a lista dentro da tupla não é imutável

