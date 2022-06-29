class Endereco:
    def __init__(self, cidade: str, estado: str) -> None:
        self.cidade = cidade
        self.estado = estado
    
    def __del__(self):
        print(f"Removendo ENDEREÇO: {self.cidade} e {self.estado}")