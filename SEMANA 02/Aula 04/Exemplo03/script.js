var area = document.getElementById("area")

area.addEventListener("click", function clicar(){
    area.style.backgroundColor = "black"
    area.innerText = "Um clique"
    area.style.color = "white"
})

area.addEventListener("mouseenter", function mouseEntra(){
    area.style.backgroundColor = "yellow"
    area.innerText = "Mouse entrou"
    area.style.color = "black"
})

area.addEventListener("mouseleave", function mouseSai(){
    area.style.backgroundColor = "beige"
    area.innerText = "Mouse Saiu"
    area.style.color = "brown"
})

area.addEventListener("dblclick", function duploClique(){
    area.style.backgroundColor = "skyblue"
    area.innerText = "Duplo clique"
    area.style.color = "black"
})

