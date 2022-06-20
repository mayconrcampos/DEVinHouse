class Voo:
    def __init__(self) -> None:
        self.numero = ""
        self.origem = ""
        self.destino = ""
        self.assentos_qte = ""
        self.valor = ""
    
    def getNumero(self):
        return self.numero 
    
    def setNumero(self, numero):
        self.numero = numero
    
    def getOrigem(self):
        return self.origem
    
    def setOrigem(self, origem):
        self.origem = origem
    
    def getDestino(self):
        return self.destino
    
    def setDestino(self, destino):
        self.destino = destino
    
    def getAssentosQtde(self):
        return self.assentos_qte
    
    def setAssentosQtde(self, qtde):
        self.assentos_qte = int(qtde)
    
    def getValor(self):
        return self.valor
    
    def setValor(self, valor):
        self.valor = float(valor)
    
    
    
    def validaCampos(self, numero, origem, destino, assentos_qte, valor):
        if numero:
            self.setNumero(numero)
        else:
            print("É preciso inserir o número de Vôo\n\n\n\n")
            return False

        if origem:
            self.setOrigem(origem)
        else:
            print("É preciso inserir a Origem\n\n\n\n")
            return False

        if destino:
            self.setDestino(destino)
        else:
            print("É preciso inserir o Destino\n\n\n\n")
            return False

        if assentos_qte.isnumeric():
            self.setAssentosQtde(assentos_qte)
        else:
            print("É preciso inserir números válidos\n\n\n\n")
            return False
        
        if valor.isnumeric():
            self.setValor(float(valor))
        else:
            print("É preciso inserir um valor válido.")
            return False
        
        return True

    

class CadastraVoos:
    def __init__(self) -> None:
        self.listaDeVoos = []
    
    def setVoo(self, voo: Voo):
        existe = 0
        for voo in self.listaDeVoos:
            if voo.numero == voo.numero:
                existe += 1

        if existe:
            print("Vôo já cadastrado no sistema.")
        else:
            self.listaDeVoos.append(voo)
            

    def listarVoos(self):
        print("-=-= Dados dos Vôos Cadastrados -=-=")

        for reserva in self.listaDeVoos:
            print(f"Número: {reserva.getNumero():^30}")
            print(f"Origem: {reserva.getOrigem():^30}")
            print(f"Destino: {reserva.getDestino():^30}")
            print(f"Qtde Assentos: {reserva.getAssentosQtde():^30}")
            print(f"Valor Base Assento $RS: {reserva.getValor():^30}")
            print("------------------------------------------\n\n\n\n")
    
    def verificaVoo(self, numero):
        existe = 0
        for voo in self.listaDeVoos:
            if numero == voo.numero:
                existe += 1
        
        if existe:
            return True

        else:
            print(f"Não existe Vôo Nº{numero}")
            return False
         

class Reservas(CadastraVoos):
    def __init__(self) -> None:
        super().__init__()

        self.reservas = []

        self.nome = ""
        self.cpf = ""
        self.num_voo = ""
        self.num_assento = ""
    
    def setNome(self, nome):
        self.nome = nome 
    
    def getNome(self):
        return self.nome 
    
    def setCpf(self, cpf):
        self.cpf = cpf
    
    def getCpf(self):
        return self.cpf
    
    def setNumVoo(self, numero):
        self.num_voo = numero
    
    def getNumVoo(self):
        return self.num_voo
    
    def setNumAssento(self, numero):
        self.num_assento = int(numero)
    
    def getNumAssento(self):
        return self.num_assento

    
    def listarReservas(self):
        for reserva in self.reservas:
            print(reserva)          
    

    def reservarPassagem(self, num_voo, nome, cpf, num_assento):
        qtde = 0
        if self.verificaDisponibilidadeAssento(nome, cpf, num_voo, num_assento):
            for voo in self.listaDeVoos:
                if voo.numero == num_voo:
                    qtde = voo.getAssentosQtde()
        
            if int(num_assento) <= qtde:
                passagem = {
                    "nome": self.getNome(),
                    "cpf": self.getCpf(),
                    "num_assento": self.getNumAssento(),
                    "num_voo": self.getNumVoo()
                }
                self.reservas.append(passagem)
            else:
                print("ERRO, Lotado!")

        


    def verificaDisponibilidadeAssento(self, nome, cpf, num_voo, num_assento):
        if self.validaCamposParaReserva(nome, cpf, num_voo, num_assento):
            for res in self.reservas:
                if res.num_assento == num_assento and res.num_voo == num_voo:
                    print("Assento já está ocupado")

                    return False
            
            return True
        

        



    def validaCamposParaReserva(self, nome, cpf, num_voo, num_assento):
        if nome:
            self.setNome(nome)
        else:
            print("É preciso inserir o nome do passageiro\n\n\n\n")
            return False

        if cpf:
            self.setCpf(cpf)
        else:
            print("É preciso inserir CPF do Passageiro\n\n\n\n")
            return False

        if num_voo:
            self.setNumVoo(num_voo)
        else:
            print("É preciso inserir o Número do Vôo\n\n\n\n")
            return False

        if num_assento.isnumeric():
            self.setNumAssento(num_assento)
        else:
            print("É preciso inserir valor numérico válido.\n\n\n\n")
            return False
        
        
        
        return True
            
                




