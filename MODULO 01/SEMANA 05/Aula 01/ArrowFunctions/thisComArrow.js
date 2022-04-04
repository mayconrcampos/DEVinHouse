/**
 * A palavra reservada this, em uma função comum
 * aponta para o context de execução desta função.
 */

/**
 * Já em uma arrow function, o this vai apontar para o contexto da classe do item.
 */

const ul = document.getElementById("teste")

class Item {
    descricao
    constructor(desc) {
        this.descricao = desc
    }
    montaItem() {
        console.log("MontaItem")
        const li = document.createElement('li')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.onclick = function () {
            // este this é o checkbox no evento de click
            console.log(this)
        }
        const texto =
        document.createTextNode(this.descricao)
        li.appendChild(checkbox)
        li.appendChild(texto)
        return li
    }
}


class Item1 {
    descricao
    constructor(desc) {
        this.descricao = desc
    }

    montaItem() {
        console.log("montaItem")
        const li = document.createElement('li')
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.onclick =  () => {
            // este this é a instância da classe Item
            console.log(this)
        }
        const texto =
        document.createTextNode(this.descricao)
        li.appendChild(checkbox)
        li.appendChild(texto)
        return li
    }
}

const item = new Item("blabla")

item.montaItem()

