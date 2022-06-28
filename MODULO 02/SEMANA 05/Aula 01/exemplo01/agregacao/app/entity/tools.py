class Caneta:
    def __init__(self, marca: str) -> None:
        self.__marca = marca
    

    @property
    def marca(self):
        return self.__marca
    
    @marca.setter
    def marca(self, marca):
        self.__marca = marca
    

    def escrever(self):
        print("Caneta escrevendo")


class Lapis(Caneta):
    

    def escrever(self):
        print("Lápis escrevendo")
