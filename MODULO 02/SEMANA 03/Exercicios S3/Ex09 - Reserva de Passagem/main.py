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

class Voo:
    def __init__(self, numero, origem, destino, assentos_qte, valor) -> None:
        self.numero = numero
        self.origem = origem
        self.destino = destino
        self.assentos_qte = assentos_qte
        self.valor = valor
    
    def getNumero(self):
        return self.numero 
    
    def getOrigem(self):
        return self.origem
    
    def getDestino(self):
        return self.destino
    
    def getAssentosQtde(self):
        return self.assentos_qte
    
    def getValor(self):
        return self.valor
    

class ReservarAssentos(Voo):
    def __init__(self, numero, origem, destino, assentos_qte, valor) -> None:
        super().__init__(numero, origem, destino, assentos_qte, valor)

        self.reservas = []
    
    def setReserva(self, voo: Voo):
        self.reservas.append(voo(self.numero, self.origem, self.destino, self.assentos_qte, self.valor))

    def listarReservas(self):
         



while True:
    print("-=-=-=-= Sistema de Reservas de Passagens Aéreas -=-=-=-=-=-")
    print("1. Efetuar Reserva de Vôo")
    print("2. Visualizar Reservas")
    print("3. Procurar Por Clientes")
    print("0. Sair")
    opcao = input("Opção: ")
    os.system("clear")

    if opcao.isnumeric():
        match opcao:
            case "0":
                print("Você saiu do sistema.")
                break
            
            case "1":
                print("1. Efetuar Reserva")

            case "2":
                print("2. Visualizar Reservas")
            
            case "3":
                print("3. Procurar Por Clientes")
            
            case _:
                print("Opção Inválida")
    
    else:
        print("ERRO! Opção não numérica.")




