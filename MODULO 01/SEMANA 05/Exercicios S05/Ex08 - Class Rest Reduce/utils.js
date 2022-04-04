export function calculaTotal(...produto){
    var total = produto.map(p => p.valor * p.quantidade).reduce((acumulador, atual) => {
        return acumulador + atual
    })

    return total
}