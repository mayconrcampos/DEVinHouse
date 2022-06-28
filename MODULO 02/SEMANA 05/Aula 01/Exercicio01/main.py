from agricultor import Agricultor
from ferramenta import Ferramenta


agric = Agricultor("Maycon")
agric2 = Agricultor("Otavio")

carroca = Ferramenta("Carroça")
bota = Ferramenta("Botina")
caminhonete = Ferramenta("Caminhonete")

agric.ferramenta = bota
agric2.ferramenta = caminhonete

agric.ferramenta.usar_ferramenta()
agric2.ferramenta.usar_ferramenta()