from abc import ABC, abstractmethod


class Pagamento(ABC):

    @abstractmethod
    def pagar(self, valor: float):
        pass


class Pix(Pagamento):

    def pagar(self, valor: float):
        print(f"PIX R$ {valor:.2f}")


class Boleto(Pagamento):

    def pagar(self, valor: float):
        print(f"Boleto R$ {valor:.2f}")


class Moeda(Pagamento):

    def pagar(self):
        pass


pix = Pix()
boleto = Boleto()
moeda = Moeda()
moeda.pagar()

boleto.pagar(5214)
pix.pagar(250)
