const [a] = [10]
console.log(a)

const [n1, , n3, , , n5, n6 = 0 ] = [10 , 7, 9 , 8]
console.log(n1, n3, n5, n6)

/////////////////// .... /////////////////////

function rand ( { min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // O operador floor vai exibir apenas o numero inteiro
}

const obj = { max : 20, min : 10}
console.log(rand(obj))
console.log(rand({min:955}))
console.log(rand({max:21, min: 54}))
console.log(rand({}))
