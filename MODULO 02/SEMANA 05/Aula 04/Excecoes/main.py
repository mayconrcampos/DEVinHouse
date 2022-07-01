"""

        Tratamento de Exceções

        é uma forma de escapar de erros e exceções, podendo contornar o problema.

        No python existe:

        try         - obrigatório
        except      - obrigatório
        else        - opcional
        finally     - opcional

"""

try:
    print(olar)
except NameError as error:
    print("Deu um problema!!",error)

finally:
    print("Chegou no finally")

