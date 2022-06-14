"""
Faça um algoritmo que:

    Receba dois valores do usuário (X e Y);
    Retorne o tamanho de cada valor inserido;
    Concatene os valores inseridos e retorne esse novo valor (Z);
    Repita o primeiro valor em inserido por tres vezes e retorne esse valor;
    Valide se X está contido Z e se Y está contido em Z;
    Imprima a primeira posição de X e a última posição de Y;


"""

X = input("Digite um valor qualquer: ")
Y = input("Digite outro valor qualquer: ")

print(f"Tamanho de X: {len(X)}")
print(f"Tamanho de Y: {len(Y)}")

Z = X + Y
print(f"Valor de Z: {Z}" if Z else "Z é vazio")

print(f"X * 3: {X*3}")

contidoXemZ = "Contido X em Z" if X in Z else "Não contido X em Z"

print(contidoXemZ)


contidoYemZ = "Contido Y em Z" if Y in Z else "Não contido Y em Z"


print(f"Primeira posição de X: {X[0]}" if len(X) > 0 else "X possui apenas 0 posições")

print(f"Última posição de Y: {Y[-1]}" if len(Y) > 0 else "Y possui apenas 0 posições ")
