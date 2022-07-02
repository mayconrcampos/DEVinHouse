

class Aluno:
    def __init__(self, nome: str, matricula: str) -> None:
        self.nome = nome
        self.matricula = matricula


class Curso:
    def __init__(self, nome: str) -> None:
        self.nome = nome
        self.aluno = []

    def cadastrar_aluno(self, aluno: Aluno):
        self.aluno.append(aluno)

    def listar_alunos(self):
        for aluno in self.aluno:
            print(aluno.nome, aluno.matricula)
