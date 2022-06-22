"""
Construir aplicação de venda de passagens de um ônibus com 46 lugares, o menu da aplicação deve conter os seguintes itens: 

Comprar Passagem (Mostrar apenas caso ainda não tenha comprado)
Cancelar Passagem (Mostrar quando tiver poltrona selecionada)
Alterar Poltrona (Caso já tenha poltrona escolhida) 
Sair

    As propriedades de valor da compra e poltrona devem ser construídas com encapsulamento, não permitindo que o cliente altere diretamente o valor da variável. Ao final da aplicação, informar qual poltrona o usuário selecionou e o valor total da compra ou mostrar que a compra foi cancelada sem custo.

"""


from os import system
import opcode
from random import randint


class Passageiro:
    def __init__(self, nome, poltrona) -> None:
        self.nome = nome
        self.poltrona = poltrona
        self.comprado = False


class VendaPassagem(Passageiro):
    def __init__(self) -> None:
        self.__valor = 35
        self.__poltrona = ""
        self.ocupadas = []
        self.num_lugares = 46

    @property
    def poltrona(self):
        return self.__poltrona

    @poltrona.setter
    def poltrona(self, numero):
        self.__poltrona = numero

    @property
    def valor(self):
        return self.__valor

    @valor.setter
    def valor(self, numero):
        self.__valor = numero

    def comprarPassagem(self, passageiro: Passageiro):
        if passageiro.comprado:
            print("Você já comprou passagem")
        else:
            ocupada = False
            poltrona = ""
            for p in self.ocupadas:
                if p["poltrona"] == passageiro.poltrona:
                    ocupada = True
                    poltrona = passageiro.poltrona
                    break

            if ocupada:
                print(f"Poltrona {poltrona} já está ocupada")

            else:
                self.poltrona = passageiro.poltrona
                passageiro.comprado = True
                if len(self.ocupadas) <= self.num_lugares:
                    if self.poltrona >= 1 and self.poltrona <= 46:
                        self.ocupadas.append({
                            "poltrona": self.poltrona,
                            "passageiro": passageiro.nome,
                            "valor": self.valor
                        })
                        # self.listarPoltronasOcupadas()
                    else:
                        print("Poltrona inexistente")
                else:
                    print("Ônibus Lotado")

    def cancelarPassagem(self, passageiro: Passageiro):
        encontrado = False
        indice = False
        for i in range(len(self.ocupadas)):
            if self.ocupadas[i]["poltrona"] == passageiro.poltrona and self.ocupadas[i]["passageiro"] == passageiro.nome:
                encontrado = True
                indice = i

        if encontrado:
            while True:
                confirma = input(f"Confirma cancelamento do Passageiro: {passageiro.nome} na Poltrona: {passageiro.poltrona}? s ou n")

                if confirma in "sS":
                    print(f"Cancelada passagem de: \n")
                    print(
                        f"Passageiro: {passageiro.nome} - Poltrona: {passageiro.poltrona}")

                    self.ocupadas.pop(indice)
                    break
                else:
                    print(f"Passageiro: {passageiro.nome} - Poltrona: {passageiro.poltrona} Não Excluído!")
                    break
        else:
            print(
                f"Passageiro: {passageiro.nome} - Poltrona: {passageiro.poltrona} Não Encontrado!")


    def mudarPoltrona(self, passageiro: Passageiro):
        encontrado = False
        indice = False
        for i in range(len(self.ocupadas)):
            if self.ocupadas[i]["poltrona"] == passageiro.poltrona and self.ocupadas[i]["passageiro"] == passageiro.nome:
                encontrado = True
                indice = i

        if encontrado:
            while True:
                poltrona = input("Digite a poltrona para a qual deseja mudar: ")

                ocupada = False
                if poltrona.isnumeric():
                    for p in self.ocupadas:
                        if poltrona == p["poltrona"]:
                            ocupada = True
                    
                    if ocupada:
                        print(f"Poltrona {passageiro.poltrona} ocupada! Favor escolha outra!")
                        continue
                    else:
                        print(f"Passageiro {passageiro.nome} mudado para Poltrona {poltrona}.")
                        self.ocupadas.pop(indice)
                        passageiro = {
                            "poltrona": int(poltrona),
                            "passageiro": passageiro.nome,
                            "valor": self.valor
                        }
                        self.ocupadas.append(passageiro)
                        break

                else:
                    print("ERRO! Opção numérica inválida")
                
        else:
            print(
                f"Passageiro: {passageiro.nome} - Poltrona: {passageiro.poltrona} Não Encontrado!")        

    def listarPoltronasOcupadas(self):
        print("Listando Números das Poltronas disponíveis\n\n")
        total = 0
        num_assentos_ocupados = 0
        self.ocupadas = sorted(self.ocupadas, key=lambda x: x["poltrona"])
        for p in self.ocupadas:
            num_assentos_ocupados += 1
            total += p["valor"]
            print(f"Poltrona: {p['poltrona']}")
            print(f"Passageiro: {p['passageiro']}")
            print(f"Valor R$: {p['valor']:.2f}")
            print("-="*20)

        if num_assentos_ocupados <= 46:
            vagos = 46 - num_assentos_ocupados

        if num_assentos_ocupados == 0:
            print("Todos os assentos estão vagos\n\n")
        else:
            print("\n-=-=-= Status das Vagas -=-=-=")
            print(f"Poltronas ocupadas: {num_assentos_ocupados}")
            print(f"Poltronas Vagas: {vagos}")
            print("-="*20)
            print(f"\nTotal R$: {total:.2f}\n\n\n\n")


compra = VendaPassagem()

# for i in range(1, 100):
#    compra.comprarPassagem(Passageiro(f"Passageiro{i}", randint(1, 46)))
#
#
# compra.listarPoltronasOcupadas()

while True:
    print("1. Comprar passagem")
    print("2. Cancelar Passagem")
    print("3. Trocar de Poltrona")
    print("0. Sair")

    opcao = input("Opção: ")
    system("clear")

    if opcao.isnumeric():
        match opcao:
            case "0":
                print("Você saiu")
                break
            case "1":
                print("1. Comprar passagem")
                compra.listarPoltronasOcupadas()

                nome = input("Digite o nome do Passageiro: ")
                poltrona = input("Digite o número da Poltrona: ")

                if poltrona.isnumeric():
                    system("clear")
                    print(f"Passageiro: {nome} - Poltrona Nº {poltrona}\n\n\n")
                    compra.comprarPassagem(Passageiro(nome, int(poltrona)))
                    compra.listarPoltronasOcupadas()
                else:
                    print("ERRO! Poltrona inválida! Somente números de 1 a 46")

            case "2":
                print("2. Cancelar Passagem")
                compra.listarPoltronasOcupadas()

                nome = input("Digite o nome do Passageiro: ")
                poltrona = input("Digite o número da Poltrona: ")

                if poltrona.isnumeric():
                    system("clear")
                    compra.cancelarPassagem(Passageiro(nome, int(poltrona)))
                    compra.listarPoltronasOcupadas()
                else:
                    print("ERRO! Poltrona inválida! Somente números de 1 a 46")

            case "3":
                print("3. Mudar de Poltrona")
                compra.listarPoltronasOcupadas()

                nome = input("Digite o nome do Passageiro: ")
                poltrona = input("Digite o número da Poltrona: ")

                if poltrona.isnumeric():
                    system("clear")
                    compra.mudarPoltrona(Passageiro(nome, int(poltrona)))
                    compra.listarPoltronasOcupadas()
                else:
                    print("ERRO! Poltrona inválida! Somente números de 1 a 46")

            case _:
                print("Opção inválida")
    else:
        print("ERRO! É preciso digitar uma opção numérica.")
