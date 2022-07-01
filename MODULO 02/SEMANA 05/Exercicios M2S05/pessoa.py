import json

class Pessoa:
    def __init__(self) -> None:
        self.nome = None
        self.celular = None
        self.email = None

    
    def cadastrar_pessoa(self, nome: str, celular: str, email: str):
        if nome and celular and email:
            self.nome = nome
            self.celular = celular
            self.email = email

            self.__salvar_pessoa()
        else:
            print("É preciso preencher todos os campos")
        

    def exibir_pessoa(self):
        try:
            with open(f"pessoa-{self.nome}.json", "r") as pessoa:
                p = json.load(pessoa)

                print(p)
                return p
        
        except Exception as erro:
            print(f"ERRO - {erro}")


    def __salvar_pessoa(self):
        with open(f"pessoa-{self.nome}.json", "w+") as p:
            pessoa = {"nome": self.nome, "celular": self.celular, "email": self.email}

            json.dump(pessoa, p)
    


pipou = Pessoa()
pipou.cadastrar_pessoa("Maycon", "48984443857", "maycon@gmail.com")
pipou.exibir_pessoa()

p2 = Pessoa()
p2.cadastrar_pessoa("Sniper", "4832131321", "sniper@gmail.com")
p2.exibir_pessoa()
