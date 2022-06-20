"""
Construir uma aplicação para informatizar o sistema de uma Pizzaria. Esse sistema precisa possuir os seguintes objetos com seus atributos:

Garçom (nome)
Pizza (tamanho, preço, sabor)
Cliente (nome, mesa, valor gasto)
Pedido (código, mesa, valor, nome cliente, nome garçom)

    Realizar a construção das classes e testar criando objetos pré-definidos.

"""


class Garcom:
    def __init__(self, nome="") -> None:
        self.nome = nome


class Pizza:
    def __init__(self, tamanho="", preco="", sabor="") -> None:
        self.tamanho = tamanho
        self.preco = preco
        self.sabor = sabor


class Cliente:
    def __init__(self, nome, mesa=1, valor_gasto=0) -> None:
        self.nome = nome
        self.mesa = mesa
        self.valor_gasto = valor_gasto
    
    def somaValor(self, valor):
        self.valor_gasto += valor


class Pedido:
    def __init__(self, codigo, mesa, total, nome_cliente, nome_garcom) -> None:
        self.codigo = codigo
        self.mesa = mesa
        self.total = total
        self.nome_cliente = nome_cliente
        self.nome_garcom = nome_garcom
    
    

