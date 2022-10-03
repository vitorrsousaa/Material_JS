let a = 1
console.log(a)

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana','Bia', 'Carlos','Daniel'])
})

p.then(function(valor) {
    console.log(valor)
})

//o resultado de cada metodo then, é enviado para o proximo
p
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

function letraMenor(letra) {
    return letra.toLowerCase()
}
p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMenor)
    .then(console.log)
