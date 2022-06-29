class Pessoa:
    def __init__(self, nome: str, idade: int) -> None:
        self.nome = nome
        self.idade = idade
    
    def falar(self):
        print("Pessoa está falando.")


class Medico(Pessoa):
    def __init__(self, nome: str, idade: int) -> None:
        super().__init__(nome, idade)
    

    def falar(self):
        print("Médico está falando.")


medico = Medico(nome="Benhur", idade=33)
medico.falar()