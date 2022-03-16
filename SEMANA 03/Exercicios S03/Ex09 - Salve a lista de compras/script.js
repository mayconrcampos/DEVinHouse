
var btn = document.getElementById("btn")
var item = document.getElementById("item")
var compras = [{"item":"sabão"}, {"item":"sabonete"}]
var listaDeCompras = document.getElementById("ul")
var salvar = document.getElementById("btn-salvar")

listar(compras, listaDeCompras)


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
    
})


function listar(lista, ul){
    
    for (const index in lista) {
        ul.innerHTML += `<li>${lista[index].item} <button onclick='deleteItem(${index})'>X</button></li>`
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



