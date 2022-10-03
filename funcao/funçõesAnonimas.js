const soma = function (x,y) {
    return x + y
}

const imprimirResulado = function (a, b, operacao = soma) {
    console.log(operacao(a,b))
}

imprimirResulado(3,4)
imprimirResulado(3,4, soma)
imprimirResulado(3,4, function (x,y) {
    return x - y
})
imprimirResulado(3,4, (x,y) => x * y)