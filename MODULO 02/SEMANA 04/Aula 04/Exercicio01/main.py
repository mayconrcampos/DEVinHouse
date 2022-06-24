from random import randint

nomes = [
    "Maycon", "Breno", "Eric", "Saulo", "Marcelo",
    "Josinaldo", "Wellington", "Adriano", "Rafael",
    "Yan", "Eduardo", "Iane", "Vineh", "Ariana", "João",
    "Julia", "Kaua", "Thiago", "Lucas", "Bruno", "Mauricio",
    "Chico", "Rogério", "Jamil", "Pedro", "Atanásio", "Vanilde",
    "Cassilda", "Barbosa", "Pafuncio", "Genoveva", "Biloba", "Transeunte",
    "Figofino"
]


listaAlunos = []


class Pessoa:
    def __init__(self, nome, idade) -> None:
        self.nome = nome
        self.idade = idade
        self.notas = []
        self.media = 0
        self.aprovado = ""


class Aluno(Pessoa):
    def __init__(self, nome, idade) -> None:
        super().__init__(nome, idade)

        self.preencheNotas()

    def preencheNotas(self):
        notas = [randint(0, 10) for x in range(0, 4)]
        self.notas = notas
        self.status(self.notas)

    def status(self, notas):
        media = sum(notas) / 4

        self.media = media

        if media <= 4:
            self.aprovado = "Reprovado"

        elif media > 4 and media < 7:
            self.aprovado = "Recuperação"

        else:
            self.aprovado = "Aprovado"


for i in range(len(nomes)):
    listaAlunos.append(Aluno(nomes[i], randint(17, 100)))


for aluno in listaAlunos:
    print(f"NOME    : {aluno.nome:>20}")
    print(f"IDADE   : {aluno.idade:>20}")

    print("NOTAS   :", end=" ")
    for nota in aluno.notas:
        print(f"{nota}", end=" - ")

    print(f"\nMEDIA   : {aluno.media:>20.2f}")
    print(f"STATUS  : {aluno.aprovado:>20}")
    print("-="*15)
