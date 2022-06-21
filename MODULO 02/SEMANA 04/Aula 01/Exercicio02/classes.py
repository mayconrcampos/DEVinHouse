"""
Construir uma aplicação que contenha uma classe pai chamada funcionário e 3 classes filhas, desenvolvedor, designer e gerente de marketing. Implemente na classe pai (Funcionários), os seguintes métodos: setarSalario, aumentarSalario e demitir. E para a classe do gerente de marketing, adicione o método “bonificacao” que aumenta o salário do funcionário de acordo com a porcentagem passada por argumento.
Inicialize o sistema com 1 funcionário para cada grupo presente e defina como atributos seus nomes e salários.

"""


class Funcionario:
    def __init__(self, nome, demitido=False) -> None:
        self.nome = nome
        self.demitido = demitido

    def setarSalario(self, salario):
        self.salario = salario
        print(f"{self.nome} ganha R$ {self.salario} / mês")

    def aumentarSalario(self, porcentagem):
        self.salario = self.salario + (self.salario / 100 * porcentagem)
        print("Salário aumentado: ", self.salario)

    def demitir(self):
        self.demitido = True


class Desenvolvedor(Funcionario):
    def __init__(self, salario, demitido=False) -> None:
        super().__init__(salario, demitido)


class Designer(Funcionario):
    def __init__(self, salario, demitido=False) -> None:
        super().__init__(salario, demitido)


class GerenteMarketing(Funcionario):
    def __init__(self, salario, demitido=False) -> None:
        super().__init__(salario, demitido)

    def bonificacao(self, porcentagem):
        if self.demitido:
            print(f"{self.nome} não faz mais parte da empresa.")
        else:
            self.salario = self.salario + (self.salario / 100 * porcentagem)
            print(f"{self.nome} ganha Salário + Bonificação: $RS {self.salario}")


dev = Desenvolvedor("Maycon")
dev.setarSalario(5000)
dev.aumentarSalario(10)

designer = Designer("Eric")
designer.setarSalario(10000)
designer.aumentarSalario(5)

gerente = GerenteMarketing("Breno")
gerente.setarSalario(15000)
gerente.aumentarSalario(5)

gerente.bonificacao(10)
