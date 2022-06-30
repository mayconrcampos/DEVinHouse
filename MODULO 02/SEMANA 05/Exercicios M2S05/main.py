
import os
import json

def linha_formatada_esq(palavra: str):
    print(palavra.ljust(40))

def linha_formatada_cen(palavra: str):
    print(palavra.center(40, "-"))

pessoa = dict()


with open("pessoa.json", "r") as peoples: 
    pessoa = json.load(peoples)


maior = 0
for n in range(1, len(pessoa) + 1):
    print(pessoa[f"{n}"])



while True:
    linha_formatada_cen("MÉDICO")
    linha_formatada_esq("1. CADASTRAR MÉDICOS")
    linha_formatada_esq("2. LISTAR MÉDICOS")
    linha_formatada_cen("PACIENTE")
    linha_formatada_esq("3. CADASTRAR PACIENTE")
    linha_formatada_esq("4. LISTAR PACIENTES")
    linha_formatada_cen("AGENDA")
    linha_formatada_esq("5. CADASTRAR AGENDA")
    linha_formatada_esq("6. LISTAR AGENDAS")
    linha_formatada_esq("7. SAIR")
    linha_formatada_cen("")

    opcao = input("Opção: ")

    os.system("clear")

    if opcao.isnumeric():
        match opcao:
            case "1":                
                nome = input("Nome: ")
                idade = input("idade: ")

                pessoa[len(pessoa) + 1] = {"nome": nome, "idade": idade}

                with open("pessoa.json", "w") as peoples: 
                    json.dump(pessoa, peoples) 

            case "2":
                with open("pessoa.json", "r") as peoples: 
                    pessoa = json.load(peoples)

                    print(type(pessoa))

                    for p, k in pessoa.items():
                        print(p, k)

            case "3":
                pass
            case "4":
                pass
            case "5":
                pass
            case "6":
                pass
            case "7":
                print("Você saiu do sistema")
                break
            case _:
                print("Opção inválida!")
    else:
        print("ERRO! Caracter inválido!")

