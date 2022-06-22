"""
Construir aplicação de venda de passagens de um ônibus com 46 lugares, o menu da aplicação deve conter os seguintes itens: 

Comprar Passagem (Mostrar apenas caso ainda não tenha comprado)
Cancelar Passagem (Mostrar quando tiver poltrona selecionada)
Alterar Poltrona (Caso já tenha poltrona escolhida) 
Sair

    As propriedades de valor da compra e poltrona devem ser construídas com encapsulamento, não permitindo que o cliente altere diretamente o valor da variável. Ao final da aplicação, informar qual poltrona o usuário selecionou e o valor total da compra ou mostrar que a compra foi cancelada sem custo.

"""


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
                        #self.listarPoltronasOcupadas()
                    else:
                        print("Poltrona inexistente")
                else:
                    print("Ônibus Lotado")
    
    def cancelarPassagem(self, passageiro: Passageiro):
        pass


    def listarPoltronasOcupadas(self):
        total = 0
        num_assentos_ocupados = 0
        for p in self.ocupadas:
            num_assentos_ocupados += 1
            total += p["valor"]
            print(f"Poltrona: {p['poltrona']}")
            print(f"Passageiro: {p['passageiro']}")
            print(f"Valor R$: {p['valor']:.2f}")
            print("-="*20)
        
        if num_assentos_ocupados <= 46:
            vagos = 46 - num_assentos_ocupados
        print(f"Total R$: {total:.2f}")
        print(f"Poltronas ocupadas: {num_assentos_ocupados}")
        print(f"Poltronas Vagas: {vagos}")
        



compra = VendaPassagem()

for i in range(1, 100):
    compra.comprarPassagem(Passageiro(f"Passageiro{i}", randint(1, 46)))


compra.listarPoltronasOcupadas()

