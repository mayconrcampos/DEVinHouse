"""
Escreva uma função que tenha a responsabilidade de formatar texto. Esta função deve receber parâmetros necessários para a construção do print e por fim retornar o texto centralizado entre caracteres definidos pelo usuarios. Caso o usuário não defina nenhum caracter, mantenha um valor padrão.

Retorno esperado:

    ------------------------ DEVINHOUSE ------------------------

"""

from ast import arg


def formatador(sep = "_", texto = "Não escreveu nada", largura = 5):
    """
        Função que formata texto digitado pelo usuário.

        Parâmetros:

        caracterSeparador: str,
        texto: str,
        largura: int, default = 10

    """

    print(F"{sep * largura} {texto} {sep * largura}")

formatador()
formatador("-=")
formatador("-=-=", "Maycon")
formatador("--=-", "Maycon DEVinHouse", 15)