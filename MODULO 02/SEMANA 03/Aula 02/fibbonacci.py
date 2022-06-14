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

        continua = input("Deseja continuar? s ou n: ")

        if continua in "sS":
            continue 
        else:
            print("Você saiu do programa.")
            break
    else:
        print("Número inválido, tente de novo.")
