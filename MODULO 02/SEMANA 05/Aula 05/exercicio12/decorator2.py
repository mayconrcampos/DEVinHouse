

from time import sleep, time


class ValidaException(Exception):
    def __init__(self, message) -> None:
        super().__init__(message)


def duplica(f):
    def func(stringue):
        if not stringue:
            raise ValidaException("Tem que ter coisa na string")
        if len(stringue) < 5:
            raise ValidaException(
                "Essa string é muito pequena... tem que ser maior que 5 caracteres")

        return f(stringue) * 2

    return func


def triplica(f):
    def func(stringue):
        return f(stringue) * 3

    return func


def espera5segundos(f):
    inicio = time()

    def func(stringue):
        sleep(5)

        fim = time()

        total = fim - inicio

        return f(stringue) + f" Esperei {total:.4f} segundos"
    return func


@duplica
def minhaStringue(stringue):
    return stringue


@espera5segundos
@triplica
def otastring(stringue):
    return stringue


if __name__ == "__main__":
    print(minhaStringue("Maycon Campos e tals "))
    print(otastring("Maycon Robson Campos "))
