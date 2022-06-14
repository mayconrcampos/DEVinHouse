"""
Faça um algoritmo que leia um vetor N[20]. A seguir, encontre o menor elemento do vetor N e a sua posição dentro da lista, mostrando: “O menor elemento de N é”, M, “e sua posição dentro da lista é:”,P.

Output esperado:

> "O menor elemento de N é {numero} e a sua posição dentro da lista é  {posicao}"

Obs:. Utilize um dos métodos de formatação de strings vistos em sala de aula
"""

n = []


while len(n) < 20:
    valor = input("Digite um valor numérico: ")

    if valor.isnumeric():
        n.append(int(valor))
    else:
        print("Valor inválido! Tente Novamente!")

menor = 0
maior = 0
posicaoMaior = 0
posicaoMenor = 0
for i in range(0, len(n)):
    if i == 0:
        menor = n[i]
        maior = n[i]

    if n[i] < menor:
        menor = n[i]
        posicaoMenor = i

    if n[i] > maior:
        maior = n[i]
        posicaoMaior = i


print(
    f"O menor elemento de N é {menor} e a sua posição dentro da lista é  {posicaoMenor}")
print(
    f"O maior elemento de N é {maior} e a sua posição dentro da lista é  {posicaoMaior}")
