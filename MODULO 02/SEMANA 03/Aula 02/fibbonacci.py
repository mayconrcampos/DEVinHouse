"""
    Sequencia de fibonnacci 

"""


def fibonacci(n):
    primeiro = 1
    segundo = 1
    terceiro = 0
    for i in range(0, n):
        print(f"{primeiro} ", end=" ")
        terceiro = segundo + primeiro
        primeiro = segundo
        segundo = terceiro
    
    print()
    
    


while True:
    n = input("Digite a quantidade: ")

    if n.isnumeric():
        fibonacci(int(n))
    else:
        print("Número inválido, tente de novo.")
