import os
from Classes import Garcom, Pizza, Cliente, Pedido
from random import randint

p1 = Pizza("P", 39.90)
p2 = Pizza("M", 59.90)
p3 = Pizza("G", 89.90)

garcom = Garcom("Pedro")

cliente = Cliente("Maycon")

pedidos = []


def listaSomas():
    soma = 0
    for pedido in pedidos:
        soma += pedido["preco"]

    print(f"Total Pedidos: R${soma:.2f}")

def ListarTodos():
    for pedido in pedidos:
        print(pedido)

while True:
    print("Digite o Tamanho da Pizza (1=P, 2=M, 3=G)")

    opcao = input("Digite a opção: 1.2.3 ou 0 Sair: ")

    os.system("clear")

    if opcao.isnumeric():
        match opcao:
            case "0":
                print("Você saiu do programa.")
                break
            case "1":
                print("P - Você escolheu tamanho P")
                
                preco = p1.preco
                
                pedido = {
                    "codigo": randint(0, 12000),
                    "mesa": cliente.mesa,
                    "preco": preco,
                    "cliente_nome": cliente.nome,
                    "garcom": garcom.nome
                }
                pedidos.append(pedido)
                cliente.somaValor(preco)
                listaSomas()
                
            case "2":
                print("M - Você escolheu tamanho M")

                preco = p2.preco

                pedido = {
                    "codigo": randint(0, 12000),
                    "mesa": cliente.mesa,
                    "preco": preco,
                    "cliente_nome": cliente.nome,
                    "garcom": garcom.nome
                }
                pedidos.append(pedido)
                cliente.somaValor(preco)
                listaSomas()
            
            case "3":
                print("G - Você escolheu tamanho G")

                preco = p3.preco
                
                pedido = {
                    "codigo": randint(0, 12000),
                    "mesa": cliente.mesa,
                    "preco": preco,
                    "cliente_nome": cliente.nome,
                    "garcom": garcom.nome
                }
                pedidos.append(pedido)

                cliente.somaValor(preco)
                listaSomas()
            
            case "4":
                print("Listar Todos os pedidos")
                ListarTodos()

            case _:
                print("Opção inválida.")

    else:
        print("ERRO! Valor inválido.")