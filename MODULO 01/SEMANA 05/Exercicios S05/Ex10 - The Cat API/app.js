var img = document.getElementById("img")
var btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    getImagem()
})


async function getImagem(){
    const imagem = await fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(json => {
        img.src = `${json[0].url}`
    })
    .catch(erro => console.log(erro))
}