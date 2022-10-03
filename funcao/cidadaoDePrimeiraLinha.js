// Criar função de forma literal
function fun1 () {} // A função vazia retorna undefned

// Armazenar em uma variável
const fun2 = function () {}

// Armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar uma função como parametro
function run(fun) {
    fun()
}

run(function () {console.log('executando...')})

// Retornar uma função como resultado
function soma (a,b) {
    return function (c) {
        console.log(a+b+c)
        }
}
soma (2,3)(4)
