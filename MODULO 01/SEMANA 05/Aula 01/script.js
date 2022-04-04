class Item {
    static #nextId = 0
    #id
    descricao

    constructor(desc = '') {
        this.#id = Item.#nextId++
        this.descricao = desc
        }
    
    get id() {
    return this.#id
    }

    static incrementa(){
        Item.#nextId++
        console.log(Item.#nextId)
    }
    
    montaItem() {
        const li = document.createElement('li')
        li.innerHTML = this.descricao
        return li
    }

}

Item.incrementa()
Item.incrementa()
