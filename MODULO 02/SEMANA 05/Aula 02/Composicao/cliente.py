from endereco import Endereco


class Cliente:
    def __init__(self, nome: str) -> None:
        self.nome = nome
        self.enderecos = []

    def cadastrar_endereco(self, cidade: str, estado: str):
        self.enderecos.append(Endereco(cidade=cidade, estado=estado))

    def listar_enderecos(self):
        for endereco in self.enderecos:
            print(
                f"Cliente {self.nome} reside em: Cidade: {endereco.cidade} Estado: {endereco.estado}")

    def __del__(self):
        print(f"Removendo {self.nome} e {self.enderecos}")