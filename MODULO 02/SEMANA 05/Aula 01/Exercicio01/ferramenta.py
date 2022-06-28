class Ferramenta:
    def __init__(self, nome: str) -> None:
        self.nome = nome
    
    def usar_ferramenta(self):
        print(f"{self.nome} sendo utilizada!")
    