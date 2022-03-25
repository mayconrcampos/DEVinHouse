class Produto {
    #_id
    #_produto 
    #_valor 
    #_lista
    constructor(produto, valor){
        this.#id = 0
        this.#produto = produto
        this.#valor = valor
        this.#_lista = []
    }

    set #id(id){
        this.#_id = id 
    }

    get #id(){
        return this.#_id
    }

    set #produto(produto){
        this.#_produto = produto
    }

    get #produto(){
        return this.#_produto
    }

    set #valor(valor){
        this.#_valor = valor
    }

    get #valor(){
        return this.#_valor
    }

    incrementaID(){
        this.#id++
    }

    salvar(){
        this.#_lista.push(this.lerDados())

        console.log(this.#_lista)
        this.listaProdutos()
    }

    lerDados(){
        let produto = {}
        this.incrementaID()
        produto.id = this.#id
        produto.nome = document.getElementById("produto").value
        produto.valor = document.getElementById("valor").value

        return produto
    }

    cancelar(){

    }

    listaProdutos(){
        var table = document.getElementById("tbody")
        table.innerHTML = ""

        for (let index = 0; index < this.#_lista.length; index++) {
            
            table.innerHTML += `<td>${this.#_lista[index]["id"]}</td> <td>${this.#_lista[index]["nome"]}</td> <td>${this.#_lista[index]["valor"]}</td> <td>X</td>`

            
        }

        console.log(table.innerHTML)
        
    }

}

var produto = new Produto()


