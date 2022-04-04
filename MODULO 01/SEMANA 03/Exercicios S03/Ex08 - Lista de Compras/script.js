
var btn = document.getElementById("btn")
var item = document.getElementById("item")
var compras = ["sabão", "sabonete"]
var listaDeCompras = document.getElementById("ul")

listar(compras, listaDeCompras)


btn.addEventListener("click", () => {
    if(item.value != ""){
        
        // Esvaziando lista
        listaDeCompras.innerHTML = ""

        // Inserindo item a lista de compras
        compras.push(item.value)

        // Chamando função listar para renderizar lista na tela
        listar(compras, listaDeCompras)

        item.value = ""
        item.focus()
        
        
    }else{
        alert("ERRO! Você deve preencher o campo.")
    }
    
})

function listar(lista, ul){
    
    for (const index in lista) {
        ul.innerHTML += `<li>${lista[index]} <button onclick='deleteItem(${index})'>x</button></li>`
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



