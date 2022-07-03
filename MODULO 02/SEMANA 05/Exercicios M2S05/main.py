from agenda import Agenda
from paciente import Paciente
from medico import Medico
from time import time
import os


def linha_formatada_esq(palavra: str):
    print(palavra.ljust(40))

def linha_formatada_cen(palavra: str):
    print(palavra.center(40, "-"))


agenda = Agenda()
med = Medico()
pac = Paciente()
hora_inicio = time()
hora_fim = 0


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
                
                os.system("clear")

                

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
                os.system("clear")

            case "4":
                print("4. LISTAR PACIENTES".center(100, "-"))
                pac.exibir_paciente()

            case "5":
                print("5. CADASTRAR AGENDA".center(100, "-"))
                
                while True:
                    if med.seleciona_medico():
                        print("MÉDICO Selecionado: ", med.nome, med.crm)
                        break

                    else:
                        print("Médico não selecionado")
                        os.system("clear")
                        continue
                
                while True:
                    if pac.seleciona_paciente():
                        print("Paciente Selecionado: ",pac.nome, pac.cpf)
                        break
                    else:
                        print("Médico Não selecionado!")
                        os.system("clear")
                        continue
                
                while True:
                    print("1. Digite o dia do Ano: ")
                    dia = input("Dia: ")

                    if dia.isnumeric() and int(dia) >= 1 and int(dia) <= 31:
                        dia = int(dia)
                    else:
                        print("Dia inválido")
                        break

                    mes = input("Mês: ")

                    if mes.isnumeric() and int(mes) >= 1 and int(mes) <= 31:
                        mes = int(mes)
                    else:
                        print("Mês inválido")
                        break

                    ano = input("Ano: ")

                    if ano.isnumeric() and int(ano) >= 1 and int(ano) <= 2022:
                        ano = int(ano)
                    else:
                        print("Ano inválido")
                        break

                    hora = input("Hora")

                    if hora.isnumeric() and int(hora) >= 0 and int(hora) <= 24:
                        hora = f"0{hora}:00" if int(hora) < 10 else f"{hora}:00"
                    else:
                        print("Hora inválida")
                        break

                    obs = input("Observação: ")

                    agenda.cadastrar_agenda(medico=med, paciente=pac, dia=dia, mes=mes, ano=ano, hora=hora, obs=obs)
                    break


            case "6":
                print("6. LISTAR AGENDA".center(100, "-"))
                agenda.exibir_agenda()

            case "7":
                print("Você saiu do sistema")
                hora_fim = time()
                total_tempo = hora_fim - hora_inicio
                print(f"Você utilizou o sistema por: {total_tempo:.4f}segs")
                break
            case _:
                print("Opção inválida!")
    else:
        print("ERRO! Caracter inválido!")

