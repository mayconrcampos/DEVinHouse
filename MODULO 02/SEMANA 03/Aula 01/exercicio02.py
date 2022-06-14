"""
Dado o que foi discutido até o momento, utilize as funções, operadores e formação de string no
programa a seguir.
Crie um algoritmo que leia três vezes um texto no terminal e com um único print retorne:
- O tamanho do texto;
- A junção do primeiro texto com o terceiro texto gerando um novo texto (quarto texto);
- Uma validação se existe o primeiro texto no quarto texto;
- Uma validação se existe o segundo texto no quarto texto;
- Primeiro caractere do quarto texto;
- Terceiro caractere do texto três;
"""

a = input("Digite um texto: ")
b = input("Digite outro texto: ")
c = input("Digite novamente outro texto: ")

if a:
    quarto = a + b + c
    print(f"{len(a) + len(b) + len(c)}" if a and b and c else "Nadica de nada", f"Quarto texto: {quarto}" if a else "Não existe primeiro texto", f"{quarto}" if b else "Não existe segundo texto no quarto texto", f"Primeiro Caractere: {quarto[0]} e Terceiro caractere: {c[2]}")
else:
    print("Você não digitou o primeiro texto.")
    

