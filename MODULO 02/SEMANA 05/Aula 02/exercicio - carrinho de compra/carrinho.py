from produto import Produto

class Carrinho:
    def __init__(self) -> None:

        self.carrinho = []
        self.total = 0
    

    def adicionar_produto(self, produto: Produto):
        self.carrinho.append(produto)

        self.calcula_total()
    

    def calcula_total(self):
        total = 0
        for produto in self.carrinho:
            total += produto.preco
        
        self.total = total
    

    def mostrar_carrinho(self):
        for produto in self.carrinho:
            print(f"Produto: {produto.nome:>30} \nValor: {produto.preco:>30.2f}")
            print("-="*20)

        print(f"Total: R$ {self.total:>30.2f}")

        