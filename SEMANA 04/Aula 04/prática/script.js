class Produto {
    #_id
    #_produto 
    #_valor 
    #_lista
    #_editar
    #_indice
    #_editaID
    constructor(){
        this.#id = 0
        this.#produto = produto
        this.#valor = valor
        this.#_lista = []
        this.#_editar
        this.#indice
        this.#_editaID = false

    }
    set #editaID(id){
        this.#_editaID = id
    }

    get #editaID(){
        return this.#_editaID
    }

    set #indice(indice){
        this.#_indice = indice
    }

    get #indice(){
        return this.#_indice
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
        let btn = document.getElementById("btn")

        nome.value = ""
        valor.value = ""
        this.#_editar = false
        this.#_indice = null
        this.#editaID = false
        console.log(this.#_indice)
        this.salvarOuEditar(this.#_editar)
        nome.focus()
    }

    salvar(){
        if(this.#_editar == false){
            if(this.lerDados()){
                this.incrementaID()
                this.#_lista.push(this.lerDados())
                this.limpaCampos()
                
            }
        }else{
            if(this.lerDados()){
                //console.log(this.lerDados())
                this.#_lista.splice(this.#_indice, 1, this.lerDados())
                this.limpaCampos()
            }
        }
        
        this.listaProdutos()
    }

    lerDados(){
        let produto = {}
        
        produto.nome = document.getElementById("produto").value
        produto.valor = document.getElementById("valor").value
        
        if(this.#_editar == false){
            if(this.validaDados(produto.nome, produto.valor) == 2){
                produto.id = this.#id
                
                return produto
    
            }else if(this.validaDados(produto.nome, produto.valor) == 3){
    
                alert("ERRO! É preciso digitar um valor numérico válido.")
                
            }else{
    
                alert("ERRO! É preciso preencher ambos os campos.")
            }
        }else{
            if(this.validaDados(produto.nome, produto.valor) == 2){
                produto.id = this.#editaID
                return produto
    
            }else if(this.validaDados(produto.nome, produto.valor) == 3){
    
                alert("ERRO! É preciso digitar um valor numérico válido.")
                
            }else{
    
                alert("ERRO! É preciso preencher ambos os campos.")
            }
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
            
            table.innerHTML += `<td>${this.#_lista[index]["id"]}</td> <td>${this.#_lista[index]["nome"]}</td> <td>${Number(this.#_lista[index]["valor"]).toFixed(2)}</td> <td><button onclick="produto.deletar(${index})">X</button><button id="editar" onclick="produto.preencheCampos('${index}, ${this.#_lista[index]['id']}, ${this.#_lista[index]['nome']}, ${this.#_lista[index]["valor"]}')">Editar</button></td>`
        }
    }

    preencheCampos(indice){
        var campoNome = document.getElementById("produto")
        var campoValor = document.getElementById("valor")

        var stringue = indice.split(",")

        var produto = {
            "indice": stringue[0],
            "id": stringue[1],
            "nome": stringue[2],
            "valor": stringue[3]
        }

        campoNome.value = produto.nome
        campoValor.value = produto.valor

        this.#_editar = true
        this.#_indice = produto.indice
        this.#editaID = produto.id

        //console.log(this.#_indice)
        this.salvarOuEditar(this.#_editar)
    }

    salvarOuEditar(editar){
        var btn = document.getElementById("btn")
        if(editar === true){
            btn.innerHTML = `Editar`
        }else{
            btn.innerHTML = "Salvar"
        }
        
        
    }

    

    salvaDB(){
        if(this.#_lista.length > 0){
            var dados = JSON.stringify(this.#_lista)
            localStorage.setItem("produtos", dados)
            alert("Dados salvos no Banco de Dados localStorage")
        }else{
            alert("ERRO! É preciso inserir itens na lista antes de salvar.")
        }
        
    }

    carregaDB(){
        this.#_lista = []
        var dados = localStorage.getItem("produtos")
        dados = JSON.parse(dados)
        this.#id = 0
        if(dados.length > 0){
            for (let index = 0; index < dados.length; index++) {
                this.#_lista.push(dados[index])
                this.#id = dados[index]["id"]
            }
            this.listaProdutos()
        }else{
            alert("ERRO! Não há itens salvos no DB")
        }
    }

}

var produto = new Produto()
