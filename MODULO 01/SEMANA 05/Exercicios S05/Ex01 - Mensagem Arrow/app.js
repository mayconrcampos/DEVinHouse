const p = document.getElementById("p")
const inpute = document.getElementById("inpute")
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {

        mensagemOla(inpute)
    
})


const mensagemOla = (inpute) => {
    if(inpute.value){
        p.innerHTML = "Olá!!"+inpute.value+"!"
    }else{
        p.innerHTML = "Olá ninguém!"
    }
}

