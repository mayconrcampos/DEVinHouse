"""

"""

while True:
    try:
        numero1 = input("Digite um numero: ")
        numero2 = input("Digite outro numero: ")

        soma = float(numero1) + float(numero2)
        print(f"{numero1} + {numero2} = {soma}")

        
    except ValueError as erro:
        print("ERRO! ",erro)
    
    else:
        continua = input("Continua? S ou N: ")

        if continua in "sS":
            continue
        else:
            print("Tchau")
            break
    
    finally:
        print("Olar")