
class OperationException(Exception):
    def __init__(self, message) -> None:
        super().__init__(message)



class Operacoes:
    def __init__(self) -> None:
        self.valor1 = None
        self.valor2 = None
    

    def soma(self, v1: int, v2: int):
        if v1.isnumeric() and v2.isnumeric():
            v1 = int(v1)
            v2 = int(v2)
            if isinstance(v1, int) and isinstance(v2, int):
                print(f"{v1} + {v2} = {v1 + v2}")
            else:
                raise OperationException("Para somar, precisa ter dois números inteiros")
        else:
            raise OperationException("Para somar, precisa ter dois números inteiros")

    def multiplica(self, v1, v2):
        if v1.isnumeric() and v2.isnumeric():
            v1 = int(v1)
            v2 = int(v2)
            if isinstance(v1, int) and isinstance(v2, int):
                print(f"{v1} x {v2} = {v1 * v2}")
            else:
                raise OperationException("Para multiplicar, precisa ter dois números inteiros")
        else:
            raise OperationException("Para multiplicar, precisa ter dois números inteiros")
    
    def subtrai(self, v1, v2):
        if v1.isnumeric() and v2.isnumeric():
            v1 = int(v1)
            v2 = int(v2)
            if isinstance(v1, int) and isinstance(v2, int):
                print(f"{v1} - {v2} = {v1 - v2}")
            else:
                raise OperationException("Para subtrair, precisa ter dois números inteiros")
        else:
            raise OperationException("Para subtrair, precisa ter dois números inteiros")
    
    def divide(self, v1, v2):
        if v1.isnumeric() and v2.isnumeric():
            v1 = int(v1)
            v2 = int(v2)
            if isinstance(v1, int) and isinstance(v2, int):
                if v1 > 0 and v2 > 0:
                    print(f"{v1} / {v2} = {v1 / v2}")
                else:
                    raise OperationException("Para dividir, os dois números precisam ser maiores que zero")
            else:
                raise OperationException("Para somar, precisa ter dois números inteiros")
        else:
            raise OperationException("Para somar, precisa ter dois números inteiros")




op = Operacoes()

while True:
    try:
        num1 = input("Digite o primeiro valor: ")
        num2 = input("Digite o segundo valor: ")

        opcao = input("1. Soma\n2. Subtrai\n3. Multiplica\n4. Divide\n5. Sair:  \n")

        if opcao.isnumeric():
            match opcao:
                case "1":
                    op.soma(num1, num2)
                case "2":
                    op.subtrai(num1, num2)
                case "3":
                    op.multiplica(num1, num2)
                case "4":
                    op.divide(num1, num2)
                case "5":
                    print("Saiu")
                    break
                case _:
                    print("Opção inválida")
        else:
            print("Caractere inválido")

        
    except OperationException as erro:
        print("ERRO! ", erro)