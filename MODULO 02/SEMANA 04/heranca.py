class Animal:
    def __init__(self, nome, cor) -> None:
        self.nome = nome
        self.cor = cor 
    

    def comer(self):
        print("Animal Come")


class Felino:
    def __init__(self, nome, cor) -> None:
        self.nome = nome 
        self.cor = cor 
    
    def comer(self):
        print(f"Felino de cor {self.cor} chamado {self.nome} come")



class Gato(Felino, Animal):
    def __init__(self, nome, cor) -> None:
        super().__init__(nome, cor)



gato = Gato("Barry", "Preto e branco malhado")
gato.comer()