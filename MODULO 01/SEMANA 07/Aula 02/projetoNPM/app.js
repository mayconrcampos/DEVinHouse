const express = require("express")
const app = express()
let porta = 4001

app.get("/", (request, response) => {
    response.json({
        "mensagem": "Alô mundo!",
        "curso": "SENAI DEVinHouse[ConectaNuvem]"
    })
})

app.get("/produtos", (request, response) => {
    response.json({
        "nome": "Mouse Pad",
        "preço": 19.90
    })
})


app.listen(porta, () => console.log(`server rodando na porta ${porta}`))

