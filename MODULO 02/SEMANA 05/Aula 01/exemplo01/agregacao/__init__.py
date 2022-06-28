from app.entity.aluno import Aluno
from app.entity.media import Media
from app.entity.tools import Caneta, Lapis
from app.entity.escritor import Escritor


def main():
    aluno = Aluno("Maycon", 26, 8, 1982, 123456, "037721379000")

    media = Media(5,8)

    print(media.media)


#main()

def exemploEscritor():
    escritor = Escritor(nome="Maycon")
    escritor2 = Escritor(nome="Ariana")

    caneta = Caneta(marca="BIC")

    lapis = Lapis(marca="Faber Castell")

    escritor.ferramenta = caneta
    escritor2.ferramenta = lapis
    

    escritor.ferramenta.escrever()
    escritor2.ferramenta.escrever()


exemploEscritor()