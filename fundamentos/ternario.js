const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

function status(param) {
    if (param >= 7) {
        return 'Aprovado'
    } else {
        return 'Reprovado'
    }
}   

console.log(resultado(7.1))
console.log(status(7.1))