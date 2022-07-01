
from mimetypes import init


class SomaException(Exception):
    def __init__(self, message) -> None:
        super().__init__(message)



class Calculo:
    @staticmethod
    def soma(a: int, b: int) -> int:
        if isinstance(a, int) and isinstance(b, int):
            return a + b
        else:
            raise SomaException("Precisa ser numeros inteiros")


    @staticmethod
    def media(a: int, b: int) -> int:
        return Calculo.soma(a, b) / 2
    


try:
    print(Calculo.media("m", 55))
except SomaException as erro:
    print(erro)