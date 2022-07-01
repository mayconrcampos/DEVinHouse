from pessoa import Pessoa
import json

class Medico(Pessoa):
    def __init__(self) -> None:
        super().__init__(self.nome, self.celular, self.email)
        self.crm = None
        self.telefone_sec = None
    
    def cadastrar_medico(self, nome: str, celular: str, email: str, crm: str, telefone_sec: str):
        if nome and celular and email and crm and telefone_sec:
            self.nome = nome
            self.celular = celular
            self.email = email
            self.crm = crm 
            self.telefone_sec = telefone_sec

            self.__salvar_pessoa()
        else:
            print("É preciso preencher todos os campos")

    def exibir_medico(self):
        try:
            with open(f"medico-{self.nome}.json", "r") as pessoa:
                p = json.load(pessoa)

                print(p)
                return p
        
        except Exception as erro:
            print(f"ERRO - {erro}")

    def __salvar_medico(self):
        with open(f"medico-{self.nome}.json", "w+") as p:
            pessoa = {
                "nome": self.nome, 
                "celular": self.celular, 
                "email": self.email,
                "crm": self.crm,
                "telefone_sec": self.telefone_sec
            }

            json.dump(pessoa, p)



