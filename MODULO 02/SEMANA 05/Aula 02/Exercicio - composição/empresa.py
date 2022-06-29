from funcionario import Funcionario

class Empresa:
    def __init__(self, nome: str) -> None:
        self.nome = nome
        self.funcionarios = []
    
    def adicionar_funcionario(self, nome: str):
        self.funcionarios.append(Funcionario(nome=nome))
    

    def listar_funcionarios(self):
        print("Lista de funcionários")
        print(f"EMPRESA: {self.nome}")
        for func in self.funcionarios:
            print(f"NOME: {func.nome}")

