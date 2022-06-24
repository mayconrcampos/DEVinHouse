from regex import P


class Verifica:
    @staticmethod
    def vivosemfome(fome):
        if fome < 5:
            return True
        else:
            return False
    
    @staticmethod
    def vivocomsaude(saude):
        if saude > 0:
            return True
        else:
            return False

    @staticmethod
    def verificaInteracoes(interacao):
        if interacao <= 10:
            print(f"Interação: Nº{interacao}")
            return True
        else:
            return False

class Tamagushi:
    def __init__(self) -> None:
        self.interacao = 0
        self.nome = ""
        self.fome = 1
        self.saude = 5
        self.idade = "" 
    
    def brincar(self):
        if Verifica.vivosemfome(self.fome) and Verifica.vivocomsaude(self.saude):
            if Verifica.verificaInteracoes(self.interacao):
                print(f"{self.nome} está brincando!")
                self.fome += 0.5
                self.saude -= 0.5
                self.interacao += 1
            else:
                print("Morreu de tanta interação")

        else:
            print(f"{self.nome} está morto!")


    def dizerNome(self):
        if Verifica.vivosemfome(self.fome) and Verifica.vivocomsaude(self.saude):
            if Verifica.verificaInteracoes(self.interacao):
                print(f"Olar! Sou um Tamagushi e meu nome é {self.nome}!")
                self.interacao += 1
            else:
                print("Morreu de tanta interação")
        else:
            print(f"{self.nome} está morto!")
    
    def dizerIdade(self):
        if Verifica.vivosemfome(self.fome) and Verifica.vivocomsaude(self.saude):
            if Verifica.verificaInteracoes(self.interacao):
                print(f"Olar! Sou {self.nome} e tenho {self.idade} anos.")
                self.interacao += 1
            else:
                print("Morreu de tanta interação")
        else:
            print(f"{self.nome} está morto!")

    def nivelSaude(self):
        if Verifica.vivosemfome(self.fome) and Verifica.vivocomsaude(self.saude):
            print(f"Nível SAÚDE: {self.saude}")
            if self.saude < 3:
                print("Saúde baixa")
           
        else:
            print(f"{self.nome} está morto!")
   
    
    def nivelFome(self):
        if Verifica.vivosemfome(self.fome) and Verifica.vivocomsaude(self.saude):
            print(f"Nível FOME: {self.fome}")
            if self.fome > 3 and self.fome < 5:
                print("Fome em alta")
            elif self.fome == 5:
                print(f"{self.nome} morreu de fome!")
           
        else:
            print(f"{self.nome} está morto!!")
        
    
    def setarNome(self, nome):
        self.nome = nome 
    
    def setarIdade(self, idade):
        self.idade = idade
 
    
    def darComida(self):
        if Verifica.vivosemfome(self.fome) and Verifica.vivocomsaude(self.saude):
            print(f"Você deu comida para o {self.nome}")
            darcomida = self.fome - 0.5
            if darcomida >= 0:
                self.fome -= 0.5
                self.interacao = 0
            else:
                print(f"{self.nome} alimentado!")

            self.nivelFome()
        else:
            print(f"{self.nome} está morto!")
    
    def darRemedio(self):
        if Verifica.vivosemfome(self.fome) and Verifica.vivocomsaude(self.saude):
            print(f"Você deu remédio para o {self.nome}")
            medicar = self.saude + 0.5
            if medicar <= 5:  
                self.saude += 0.5
                self.interacao = 0
            else:
                print(f"{self.nome} está totalmente saudável!")

            self.nivelSaude()
        else:
            print(f"{self.nome} está morto")
    
    
    def status(self):
        print("-=-=-= Status Tamagushi -=-=-=")
        print(f"NOME    :               {self.nome}")
        print(f"IDADE   :               {self.idade}")
        
        if Verifica.verificaInteracoes(self.interacao):
            print(f"-="*10)
            print(f"NÍVEL SAÚDE :           {self.saude}")
            if self.saude > 3:
                print("Muito saudável")
            else:
                print("Quase morrendo")
            print("-="*10)

            print(f"NÍVEL FOME  :           {self.fome}")
            if self.fome < 3:
                print("Sem fome")
            else:
                print("Tá com fome")
        else:
            print("Morreu")

    



