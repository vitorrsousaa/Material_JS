const produto = [
    {nome: 'Noteboook', preco: 2499, fragil: true}, 
    {nome: 'Ipad', preco: 4199, fragil:true},
    {nome: 'Copo de vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plastico', preco: 18.49, fragil:false}
]

console.log(produto.filter(function(p) { // Definimos a função callback, e o parametro entra no return
    return false
}))

// Quer que apareça apenas os produtos caros e frageis

const resultado = produto.filter(function (p) {
    return p.preco >= 500
}).filter(function (p) {
    return p.fragil == true
})

console.log(resultado)

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))