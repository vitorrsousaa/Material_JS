const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso:13
}

console.log(Object.keys(pessoa)) // Retorna um array com as chaves do objeto
console.log(Object.values(pessoa)) // Retorna um array com os valores do objeto
console.log(Object.entries(pessoa)) // Retorna um array com array do par chave:?valor

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]} : ${e[1]}`)
})

Object.defineProperty (pessoa, 'dataNascimento', {
    enumerable: true, // sera lista no object.keys
    writable: false, // Não sera ser editada
    value: '01/01/2019'
})

pessoa.dataNascimento = '2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign

const destino = {a:1} // Objeto de destino
const o1 = {b:2}
const o2 = {c: 3, a:4} // O ultimo valor fica sobescrito
const obj = Object.assign(destino, o1, o2) 
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)