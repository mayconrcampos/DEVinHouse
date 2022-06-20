"""
Desenvolva um programa em Python que efetue reserva de passagens de uma companhia aérea. Logo no início do seu programa, leia as informações do voo (número, origem, destino, quantidade de assentos disponíveis e o valor das passagens aéreas).

Após o cadastro do voo, o programa deverá permitir o cadastro da reserva de assento, informando o código da reserva, e realizar a cobrança considerando os descontos pela ordem de assentos reservados, seguindo as informações de descontos descritas na tabela abaixo:

    Os 10 primeiros assentos: 25% de desconto
    11o ao 15o assento: 15% de desconto
    16o ao 20o assento: 5% de desconto
    A partir do 20o assento: valor integral

Após a finalização do cadastro de todas as reservas, o funcionário da companhia aérea digita -1 no código da reserva.

"""
import os
from Classes import Reservas, Voo, CadastraVoos


listaDeVoos = CadastraVoos()
reservas = Reservas()

while True:
    print("-=-=-=-= Sistema de Reservas de Passagens Aéreas -=-=-=-=-=-")
    print("1. Cadastrar Vôo")
    print("2. Visualizar Vôos Cadastrados")
    print("3. Efetuar Reserva")
    print("4. Visualizar Reservas")
    print("5. Procurar Por Clientes")
    print("0. Sair")
    opcao = input("Opção: ")
    os.system("clear")

    if opcao.isnumeric():
        match opcao:
            case "0":
                print("Você saiu do sistema.")
                break
            
            case "1":
                print("1. Cadastrar Vôos")

                numero = input("Digite o número do vôo: ").lower().strip()
                origem = input("Digite a Origem: ")
                destino = input("Digite o Destino: ")
                assentos_qte = input("Quantidade Total de Assentos: ")
                valor = input("Valor base da Passagem: R$: ")

                voo = Voo()
                if voo.validaCampos(numero, origem, destino, assentos_qte, valor):

                    listaDeVoos.setVoo(voo)

                    listaDeVoos.listarVoos()
                else:
                    print("ERRO! Preenchimento inválido dos campos.")

            case "2":
                print("2. Visualizar todos os Vôos Cadastrados")
                listaDeVoos.listarVoos()

            case "3":
                print("3. Efetuar Reserva")

                num_voo = input("Digite o número do Vôo: ").strip()

                if listaDeVoos.verificaVoo(num_voo):
                    nome = input("Digite o nome do Passageiro: ")
                    cpf = input("Digite o CPF: ")
                    num_assento = input("Digite o número do Assento do avião: ")

                    reservas.reservarPassagem(nome, cpf, num_assento, num_voo)


            
            case "4":
                print("4. Visualizar Reservas")
                reservas.listarReservas()
            
            case "5":
                print("5. Procurar Por Clientes")
            
            case _:
                print("Opção Inválida")
    
    else:
        print("ERRO! Opção não numérica.")




