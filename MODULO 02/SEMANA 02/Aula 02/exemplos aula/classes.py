"""
    Classes em Python
"""

class Catioro:

    def __init__(self) -> None:
        self.nome = None
        self.cor = None
    
    def setNome(self, nome):
        self.nome = nome
    
    def setCor(self, cor):
        self.cor = cor 
    
    def getCor(self):
        return self.cor
    
    def getNome(self):
        return self.nome
    
    def dizerNome(self):
        print(f"Olá, sou a {self.getNome()}! Sou um(a) catioro(a)! Tenho a cor {self.getCor()}")
    
    def latir(self):
        print(f"{self.getNome()} está latindo! Au au!")


cateora = Catioro()
cateora.setNome("Lilica")
cateora.setCor("Preto")
cateora.dizerNome()
cateora.latir()

cateoro = Catioro()
cateoro.setNome("Scooby")
cateoro.setCor("Marrom")
cateoro.dizerNome()
cateoro.latir()
