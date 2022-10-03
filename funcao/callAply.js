function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1- this.desc) * (1+ imposto)}`
}

const produto = {
    nome: 'Notebook' , 
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // A função getpreco só irá identificar os valores se estiverem no escopo global

console.log(produto.getPreco()) // Estamos utilizando a função de dentro de um objeto, o escopo global é o objeto

const carro = {preco: 49990, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
