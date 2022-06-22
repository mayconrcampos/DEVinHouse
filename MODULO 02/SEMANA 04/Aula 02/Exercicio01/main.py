"""
Construir duas classes filhas, nomeadas como vendedorPJ e uma vendedorCLT, ambas tendo como base a classe Pessoa, com um método de calcularComissaoVendas. Definir o método também nas classes filhas mas com as lógicas:

Para a classe Pessoa, retornar a comissão equivalente a 10% das vendas

VendedorCLT, retornar a comissão a 3% das vendas mais um valor fixo de 1100.

VendedorPJ, retornar uma comissão de 18% das vendas.

"""


class Pessoa:
    def __init__(self, venda) -> None:
        self.venda = venda

    def calcularComissaoVendas(self):
        print(f"Pessoa: R$ {self.venda + (self.venda / 100 * 10):>30.2f}")


class VendedorPJ(Pessoa):
    def __init__(self, venda) -> None:
        super().__init__(venda)

    def calcularComissaoVendas(self):
        print(f"PJ: R$ {self.venda + (self.venda / 100 * 18):>30.2f}")


class VendedorCLT(Pessoa):
    def __init__(self) -> None:
        self.venda = 1100

    def calcularComissaoVendas(self):
        print(f"CLT: R$ {self.venda + (self.venda / 100 * 3):>30.2f}")


p = Pessoa(1000)
p.calcularComissaoVendas()

pj = VendedorPJ(2000)
pj.calcularComissaoVendas()


clt = VendedorCLT()
clt.calcularComissaoVendas()




