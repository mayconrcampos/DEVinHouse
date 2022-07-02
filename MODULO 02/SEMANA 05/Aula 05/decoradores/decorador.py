class SomaException(Exception):
    def __init__(self, message) -> None:
        super().__init__(message)


def validador(f):
    def calcular(x, y):
        if x is None or y is None:
            raise SomaException("Valores Nulos não são aceitos nesse cálculo")

        if not isinstance(x, int) or not isinstance(y, int):
            raise SomaException("Valores devem ser números inteiros")

        return f(x, y)

    return calcular


@validador
def soma(x, y):
    return x + y


@validador
def media(x, y):
    return (x+y) / 2


if __name__ == "__main__":

    print(soma(30, 30))
    print(media(10, None))
