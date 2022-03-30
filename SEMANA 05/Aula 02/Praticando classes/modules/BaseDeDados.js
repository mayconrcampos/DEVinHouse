import { Produto } from "./Produto.js"

var produto = new Produto()

export class BaseDedados{
    lista = [{nome: "Banana", qtde: 10, valor: 7.99}]
    
    listar(){
        this.lista.forEach((item, index) => {
            console.log(item.nome, item.qtde, item.valor)
        })
    }

    adicionar(Produto){
        this.lista.push({
            "nome": Produto.nome,
            "qtde": Produto.qtde,
            "valor": Produto.valor
        })
    }
}

