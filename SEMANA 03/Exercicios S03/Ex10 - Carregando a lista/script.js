
var btn = document.getElementById("btn")
var item = document.getElementById("item")
var compras = []

var listaDeCompras = document.getElementById("ul")
var salvar = document.getElementById("btn-salvar")
var carregar = document.getElementById("btn-carregar")


function onLoad(){
    if(window.localStorage.getItem("itens")){
        var meusItens = localStorage.getItem("itens")
        var listaString = JSON.parse(meusItens)
    
        if(listaString.length != 0){
            compras = []
            for (const item of listaString) {
                compras.push({"item": item.item})
            }
        
            listar(compras, listaDeCompras)
        
            alert("Lista carregada da localStorage")
        }else{
            alert("Seu localStorage existe mas está vazio. Insira itens na lista e clique em 'salvar lista'.")
        }
    }else{
        alert("ERRO! Não existe nenhum localStorage salvo em seu navegador!\n Comece a criar sua lista e clique em salvar para criar seu localStorage.")
    }
    
    
}

btn.addEventListener("click", () => {
    if(item.value != ""){
        
        // Esvaziando lista
        listaDeCompras.innerHTML = ""

        // Inserindo item a lista de compras
        compras.push({"item":item.value})

        // Chamando função listar para renderizar lista na tela
        listar(compras, listaDeCompras)

        item.value = ""
        item.focus()
        
        
    }else{
        alert("ERRO! Você deve preencher o campo.")
    }
    
})

salvar.addEventListener("click", () => {
    var listaJson = JSON.stringify(compras)
    listaJson = JSON.parse(listaJson)
    console.log(listaJson)
    localStorage.setItem("itens", JSON.stringify(listaJson))
    
    alert("Lista salva na localStorage")
    
    

})

carregar.addEventListener("click", () => {
    var meusItens = localStorage.getItem("itens")

    if(meusItens != null){
        if(compras.length == 0){
            var listaString = JSON.parse(meusItens)
            compras = []
            for (const item of listaString) {
                compras.push({"item": item.item})
            }
        
            listar(compras, listaDeCompras)
        
            alert("Lista carregada da localStorage")
        }else{
            alert("ERRO! Lista de compras precisa estar vazia para importar do localStorage")
        }
        
    }else{
        alert("LocalStorage vazia")
    }
})


function listar(lista, ul){
    
    for (const index in lista) {
        ul.innerHTML += `<li class='itemLista' ondblclick='riscar(${index})' ><img src='./img/seta.png' width="30px"'> ${lista[index].item} <button onclick='deleteItem(${index})'>X</button></li>`
    }
}

function deleteItem(index){
    ul.innerHTML = ""
    console.log(compras)
    console.log(index)
    compras.splice(index, 1)

    listar(compras, listaDeCompras)
    item.focus()

}

function riscar(index){
    var itemLista = document.querySelectorAll(".itemLista")

    if(itemLista[index].style.textDecoration == "line-through"){
        itemLista[index].style.textDecoration = "none"
    }else{
        itemLista[index].style.textDecoration = "line-through"
    }
    
}



