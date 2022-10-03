const nums = [1, 2, 3, 4, 5]

// map é o for com proposito
// transforma cada valor do array
// map recebe 3 parametro (valor, indice, array completo)

let resultado = nums.map(function (e) {
    return e * 2
})

console.log(resultado)

// to fixed - define o numero de casas decimais
// parse float - transforma em string
// replace - substitui
const soma10 = e => e+10
const triplo = e => e*3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)