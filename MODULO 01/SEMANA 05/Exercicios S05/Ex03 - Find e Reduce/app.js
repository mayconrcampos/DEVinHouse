var nome = document.getElementById("nome")
var btn = document.getElementById("btn")
var exibe = document.getElementById("exibe")
var soma = document.getElementById("soma")

const produtos = [
    { nome: 'arroz', preco: 9 },
    { nome: 'feijao', preco: 12 },
    { nome: 'batata', preco: 8 },
    { nome: 'macarrao', preco: 5 },
    { nome: 'óleo', preco: 7.90 },
];

const total = produtos.map(total => total.preco).reduce((acumulador, atual) => {
    console.log(acumulador, atual)
    return acumulador + atual
})

soma.innerHTML = `Total R$${total.toFixed(2)}`


btn.addEventListener("click", () => {
    var item = procura(nome.value, produtos)

    if(item){
        exibe.innerHTML = `Produto: ${item.nome} - Preço R$: ${item.preco.toFixed(2)}`
    }else{
        exibe.innerHTML = `Produto não encontrado.`
    }
})


function procura(nome, lista){
    var item = lista.find(n => n.nome === nome)
    return item
}

