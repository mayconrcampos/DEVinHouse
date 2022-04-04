class Dev{
    #_nome 
    #_idade
    #_linguagem
    constructor(nome, idade, linguagem){
        this.nome = nome 
        this.idade = idade 
        this.linguagem = linguagem
    }

    set nome(nome){
        this.#_nome = nome 
    }

    get nome(){
        return this.#_nome
    }

    set idade(idade){
        this.#_idade = idade
    }

    get idade(){
        return this.#_idade
    }

    set linguagem(linguagem){
        this.#_linguagem = linguagem
    }

    get linguagem(){
        return this.#_linguagem
    }

    apresentacao(){
        console.log(`Meu nome é ${this.nome}. Trabalho com ${this.linguagem} e tenho ${this.idade} anos.`)
    }
}



class DevFrontEnd extends Dev {
    framework
    constructor(nome, idade, linguagem, framework){
        super(nome, idade, linguagem)
        this.framework = framework
    }

    apresentacao(){
        console.log(`Meu nome é ${this.nome}. Trabalho com ${this.linguagem} e tenho ${this.idade} anos. Meu Framework favorito é o ${this.framework}.`)
    }
}

class DevBackEnd extends Dev {
    DB
    constructor(nome, idade, linguagem, DB){
        super(nome, idade, linguagem)
        this.DB = DB
    }

    apresentacao(){
        console.log(`Meu nome é ${this.nome}. Trabalho com ${this.linguagem} e tenho ${this.idade} anos. Sou especialista no Banco de Dados ${this.DB}.`)
    }
}

const dev = new Dev("Maycon", 39, "Javascript")

dev.apresentacao()

const front = new DevFrontEnd("Maycon Campos", 39, "Javascript", "VueJS")
front.apresentacao()

const back = new DevBackEnd("Maycon R", 40, "PHP", "MySQL")
back.apresentacao()