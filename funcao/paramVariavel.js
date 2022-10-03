function soma () {
    let soma = 0
    for (i in arguments) { // Arguemnts é um array interno que assume todos os parametros
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.2, 2.2, 3.3))
console.log(soma(1.2, 2.2, 3.3, 'teste'))
console.log(soma('a','b','c'))