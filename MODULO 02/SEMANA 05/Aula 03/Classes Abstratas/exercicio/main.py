"""
    Implemente uma classe abstrata referente a polígonos regulares, contendo um método “numero_de_lados”.

    Implemente outras duas classes (Hexágono e Triângulo) e herde da classe abstrata Polígono, criada anteriormente.

    Implemente nas classes concretas o método “numero_de_lados” com um print específico para cada classe.
"""
import math
from abc import ABC, abstractmethod



class Poligono(ABC):

    @abstractmethod
    def numero_de_lados(self, base: int, altura: int):
        pass


class Hexagono(Poligono):
    
    def numero_de_lados(self, base: int, altura: int):
        area = (base * altura / 2) * 6 
        print(area)


class Triangulo(Poligono):
    
    def numero_de_lados(self, base: int, altura: int):
        area = base * altura / 2
        print(area)


hexa = Hexagono()
hexa.numero_de_lados(2, 4)

tri = Triangulo()
tri.numero_de_lados(2, 4)