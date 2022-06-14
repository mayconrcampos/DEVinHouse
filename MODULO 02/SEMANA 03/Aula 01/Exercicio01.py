"""
Dado o que foi discutido até o momento, utilize as funções e operadores de string no programa
abaixo.
Crie um algoritmo que leia três vezes um texto no terminal e retorne:
- O tamanho do texto;
- O primeiro texto quatro vezes na mesma linha;
- O segundo texto duas vezes na mesma linha;
- O terceiro texto três vezes na mesma linha;
- A junção do primeiro texto com o terceiro texto gerando um novo texto (quarto texto);
- Uma validação se existe o primeiro texto no quarto texto;
- Uma validação se existe o segundo texto no quarto texto;
- Primeiro caractere do quarto texto;
- Terceiro caractere do texto três;
"""


a = input("Digite um texto: ")
b = input("Digite outro texto: ")
c = input("Digite novamente outro texto: ")

print(f"Tamanho do primeiro texto: {len(a)}")
print(f"Tamanho do segundo texto: {len(b)}")
print(f"Tamanho do último texto: {len(c)}")

print(f"Primeiro texto x4: {a * 4}")
print(f"Segundo texto x 2: { b * 2 }")
print(f"Terceiro texto x 3: {c * 3}")

print(f"Primeiro texto + terceiro texto: {a + c}")

if a:
    quartoTexto = a + "  " + c
    print(f"Quarto Texto com o primeiro texto: {quartoTexto}")
else:
    print(f"Quarto texto sem o primeiro texto: {quartoTexto}")


if b:
    quartoTexto = a + " " + b + " " + c
    print(f"Segundo texto no quarto texto: {quartoTexto}")
    print("Primeiro caractere do quarto texto: " + quartoTexto[0])
else:
    print("Sem segundo texto")


print(f"Terceiro caractere: "+ c[2])