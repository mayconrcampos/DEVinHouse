# Variáveis em Python

"""
Python é uma Linguagem dinamicamente tipada, ou seja, não precisamos atribuir tipos a variáveis, por exemplo... Ao declararmos variáveis em python, declaramos somente o seu nome, e o tipo será implícito, vai depender daquilo que foi atribuído àquela variável.
"""

# tipo int
a = 1

# tipo float
b = 1.1

# tipo string
c = "Minha string"

# tipos booleanos

verdadeiro = True
falso = False


"""
Visibilidade de variáveis
"""

nome = "maycon"

def diganome():
    nome = "Ariana"
    print(nome)


print(nome)
diganome()
