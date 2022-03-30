export class Interface{
    constructor(){
        this.body = document.body
        this.header = document.createElement("div")
        this.formulario = document.createElement("div")

        this.tituloFormulario = document.createElement("h2")
        this.labelNome = document.createElement("label")
        this.inputNome = document.createElement("input")

        this.labelQuantidade = document.createElement("label")
        this.inputQuantidade = document.createElement("input")
        
        this.labelValor = document.createElement("label")
        this.inputValor = document.createElement("input")

        this.btnCadastrar = document.createElement("button")

        this.insereHeader()
        this.containerFormulario()
        this.mostraFormulario()
        
    }
    
    insereHeader(){
        this.body.style.margin = "0"

        this.header.style.width = "100%"
        this.header.style.backgroundColor = "skyblue"
        this.header.style.color = "black"
        this.header.style.top = "0"
        this.header.style.textAlign = "center"
        this.header.style.padding = "10px"

        var titulo = document.createElement("h1")
        titulo.textContent = "Carrinho de Compras"

        this.header.appendChild(titulo)

        this.body.appendChild(this.header)
    }

    containerFormulario(){
         
        this.formulario.style.backgroundColor = "beige"
        this.formulario.style.border = "2px solid black"
        this.formulario.style.boxShadow = "5px 5px 10px black"
        this.formulario.style.width = "70%"
        this.formulario.style.margin = "auto"
        this.formulario.style.padding = "10px"
        this.formulario.style.borderRadius = "5px"
        this.formulario.style.marginTop = "10px"
        this.formulario.style.textAlign = "center"
        this.formulario.style.display = "flex"
        this.formulario.style.flexDirection = "column"


        this.body.appendChild(this.formulario)

    }

    mostraFormulario(){
        this.tituloFormulario.textContent = "Insira os produtos abaixo"

        this.formulario.appendChild(this.tituloFormulario)
        this.inputNome.type = "text"
        this.inputNome.placeholder = "Nome do Produto"
        this.inputNome.id = "nome"
        this.inputNome.style.padding = "3px"
        this.inputNome.style.margin = "5px"
        this.inputNome.style.borderRadius = "5px"
        this.inputNome.style.fontFamily = "'Courier New', Courier, monospace"

        this.labelNome.textContent = "Nome do Produto"
        this.labelNome.style.width = "50%"
        this.labelNome.style.textAlign = "right"
        this.labelNome.style.margin = "auto"

        this.labelNome.appendChild(this.inputNome)
        this.formulario.appendChild(this.labelNome)

        this.inputQuantidade.type = "text"
        this.inputQuantidade.placeholder = "Quantidade"
        this.inputQuantidade.id = "quantidade"
        this.inputQuantidade.style.padding = "3px"
        this.inputQuantidade.style.margin = "5px"
        this.inputQuantidade.style.borderRadius = "5px"
        this.inputQuantidade.style.fontFamily = "'Courier New', Courier, monospace"

        this.labelQuantidade.textContent = "Quantidade"
        this.labelQuantidade.style.width = "50%"
        this.labelQuantidade.style.textAlign = "right"
        this.labelQuantidade.style.margin = "auto"

        this.labelQuantidade.appendChild(this.inputQuantidade)
        this.formulario.appendChild(this.labelQuantidade)


        this.inputValor.type = "text"
        this.inputValor.placeholder = "Valor do Produto"
        this.inputValor.id = "nome"
        this.inputValor.style.padding = "3px"
        this.inputValor.style.margin = "5px"
        this.inputValor.style.borderRadius = "5px"
        this.inputValor.style.fontFamily = "'Courier New', Courier, monospace"

        this.labelValor.textContent = "Valor"
        this.labelValor.style.width = "50%"
        this.labelValor.style.textAlign = "right"
        this.labelValor.style.margin = "auto"

        this.labelValor.appendChild(this.inputValor)
        this.formulario.appendChild(this.labelValor)

        this.btnCadastrar.innerHTML = "Cadastrar"
        

        this.formulario.appendChild(this.btnCadastrar)

        this.eventosBotao()
        
    }

    eventosBotao(){
        this.btnCadastrar.addEventListener("click", () => {
            console.log("Botão Cadastrar Clicado")
        })
    }
}