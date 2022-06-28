class Agricultor:
    def __init__(self, nome: str) -> None:
        self.__nome = nome
        self.ferramenta = None
    
    @property
    def nome(self):
        return self.__nome
    
    @nome.setter
    def nome(self, nome):
        self.__nome = nome
    
