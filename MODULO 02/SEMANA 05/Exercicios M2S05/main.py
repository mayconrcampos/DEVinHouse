from agenda import Agenda
from paciente import Paciente
from medico import Medico

import os
import json

def linha_formatada_esq(palavra: str):
    print(palavra.ljust(40))

def linha_formatada_cen(palavra: str):
    print(palavra.center(40, "-"))

#pessoa = dict()
#
#
#with open("pessoa.json", "r") as peoples: 
#    pessoa = json.load(peoples)
#
#
#maior = 0
#for n in range(1, len(pessoa) + 1):
#    print(pessoa[f"{n}"])

agenda = Agenda()
med = Medico()
pac = Paciente()
#endPaciente = Endereco()
#endPaciente.cadastrar_endereco("Rua Paula Ramos", "3013", "casa", "Capoeiras", "Floripa", "SC")
#

#
#
#p = Paciente()
#p.cadastrar_paciente("Maycon", "48984445454", "maycon@gmail.com",
#                     "42654444", "037721313131", "4832411515", "unimed", "26/08/1982")
#
##
#ag.cadastrar_agenda(med, p, 25, 12, 2022, "10:00", "Venha de jejum")
#ag.exibir_agenda()


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
                print("1. CADASTRAR MÉDICOS".center(100, "-"))

                nome = input("Nome: ")
                celular = input("Celular: ")
                email = input("Email: ")
                crm = input("CRM: ")
                telefone_sec = input("Telefone Secundário: ")

                
                med.cadastrar_medico(nome=nome, celular=celular,
                     email=email, crm=crm, telefone_sec=telefone_sec)

                

            case "2":
                print("2. LISTAR MÉDICOS".center(100, "-"))
                med.exibir_medico()

            case "3":
                print("3. CADASTRAR PACIENTE".center(100, "-"))
                
                nome = input("Nome: ")
                celular = input("Celular: ")
                email = input("Email: ")
                rg = input("RG :")
                cpf = input("CPF :")
                telefone = input("Telefone: ")
                convenio = input("Convênio :")
                data_nasc = input("Data de Nascimento: ")

                pac.cadastrar_paciente(nome=nome, celular=celular, email=email, rg=rg, cpf=cpf, telefone=telefone, convenio=convenio, data_nasc=data_nasc)

            case "4":
                print("4. LISTAR PACIENTES".center(100, "-"))
                pac.exibir_paciente()

            case "5":
                print("5. CADASTRAR AGENDA".center(100, "-"))
            case "6":
                print("6. LISTAR AGENDA".center(100, "-"))
            case "7":
                print("Você saiu do sistema")
                break
            case _:
                print("Opção inválida!")
    else:
        print("ERRO! Caracter inválido!")

