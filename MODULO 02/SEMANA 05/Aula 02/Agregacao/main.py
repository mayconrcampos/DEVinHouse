import os
from Aluno import Aluno, Curso


curso = Curso(nome="Python - do básico ao avançado")


while True:
    print("1. insere aluno")
    print("2. Lista alunos")
    print("3. sair")

    opcao = input("Opção: ")

    os.system("clear")

    if opcao.isnumeric():
        match opcao:
            case "1":
                print("Adicionar aluno")
                nome = input("Digite o nome: ")
                matricula = input("Digite a matrícula: ")

                curso.cadastrar_aluno(Aluno(nome=nome, matricula=matricula))
                curso.listar_alunos()
            case "2":
                print("2. Lista Alunos")
                curso.listar_alunos()

            case "3":
                print("Você saiu")
                break
            case _:
                print("Opção inválida")
    else:
        print("Erro, opção não numérica.")
