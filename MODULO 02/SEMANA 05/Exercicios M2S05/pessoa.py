import json
from exception import AtributoException
from Endereco import Endereco


class Pessoa:
    def __init__(self) -> None:
        self.nome = None
        self.celular = None
        self.email = None
        self.endereco = Endereco()

    def cadastrar_pessoa(self, nome: str, celular: str, email: str):
        pass

    def exibir_pessoa(self):
        pass

    def __salvar_pessoa(self):
        pass
