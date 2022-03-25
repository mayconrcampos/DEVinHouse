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

    limpaCampos(){
        let nome = document.getElementById("produto")
        let valor = document.getElementById("valor")

        nome.value = ""
        valor.value = ""
        nome.focus()
    }

    salvar(){
        if(this.lerDados()){
            this.incrementaID()
            this.#_lista.push(this.lerDados())
            this.limpaCampos()
            
        }
        this.listaProdutos()
    }

    lerDados(){
        let produto = {}
        
        produto.nome = document.getElementById("produto").value
        produto.valor = document.getElementById("valor").value
        

        if(this.validaDados(produto.nome, produto.valor) == 2){
            produto.id = this.#id
            
            return produto

        }else if(this.validaDados(produto.nome, produto.valor) == 3){

            alert("ERRO! É preciso digitar um valor numérico válido.")
            
        }else{

            alert("ERRO! É preciso preencher ambos os campos.")
        }
    }

    validaDados(produto, valor){
        if(produto.length > 0 && valor.length > 0){
            if(!isNaN(valor)) return 2  //Se for numérico, continua
            if(isNaN(valor)) return 3   // Se não for numérico, erro
      
        }else{
            return 4 // Se algum campo estiver vazio, erro
        } 
    }

    deletar(indice){
        this.#_lista.splice(indice, 1)
        this.listaProdutos()
    }

    cancelar(){
        this.#_lista = []
        this.listaProdutos()
    }

    listaProdutos(){
        var table = document.getElementById("tbody")
        table.innerHTML = ""

        for (let index = 0; index < this.#_lista.length; index++) {
            
            table.innerHTML += `<td>${this.#_lista[index]["id"]}</td> <td>${this.#_lista[index]["nome"]}</td> <td>${Number(this.#_lista[index]["valor"]).toFixed(2)}</td> <td><button onclick="produto.deletar(${index})">X</button></td>`
        }
    }

}

var produto = new Produto()


