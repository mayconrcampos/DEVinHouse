// São parecidos com vetores, mas podemos dar nomes aos indices... 
// São idênticos aos dicionários em python.

var carros = {
    "marca": "Fiat",
    "modelo": "Uno",
    "ano": 1997,
    falaCarro: () => {
        for (const key in carros) {
            console.log(key, carros[`${key}`])
                 
        }
    }
}

carros.falaCarro()
