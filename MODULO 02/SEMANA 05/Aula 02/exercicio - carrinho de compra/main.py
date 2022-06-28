import os
from carrinho import Carrinho
from produto import Produto


carrinho = Carrinho()


while True:
    print("1. insere produto")
    print("2. Lista produtos")
    print("3. sair")

    opcao = input("Opção: ")

    os.system("clear")

    if opcao.isnumeric():
        match opcao:
            case "1":
                print("Adicionar Produto")
                nome = input("Digite o nome: ")
                preco = input("Digite o preco: ")

                for _ in preco:
                    if _ == ",":
                       preco =  preco.replace(",", ".")
          
                

                while True:
                    if isinstance(float(preco), float) or isinstance(int(preco), int):
                        preco = float(preco)
                        break
                

                carrinho.adicionar_produto(produto=Produto(nome=nome, preco=preco))
                carrinho.mostrar_carrinho()
            case "2":
                print("2. Lista Alunos")
                carrinho.mostrar_carrinho()

            case "3":
                print("Você saiu")
                break
            case _:
                print("Opção inválida")
    else:
        print("Erro, opção não numérica.")