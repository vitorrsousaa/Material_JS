// Arrow function
const soma = (a,b) => a+b
console.log(soma(2,3))

// Arrow function this
const lexico1 = () => console.log(this === exports)
const lexico2 = () => lexico1.bind({})
lexico1()
lexico2()

// Parametro default
function log(texto ='Node') {
    consolge.log(texto)
}
log()
log('sou mais forte')

// Operador rest - todos os parametros são agrupados em um array dentor da função
function tota(...numeros) {
    let total = 0
    numeros.forEach(n=>total += n)
    return total
}
console.log(total(2,3,4,5))