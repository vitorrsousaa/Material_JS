const a = {name: 'Teste'}
console.log(a)

const b = a 
console.log(b)

b.name = ('Opa') //Objetos e funções trabalham com referencia em um espaço de memória
console.log(a)
console.log(b)

let c = 3 
let d = c
d = 5 // conseguimos alterar tipos primitivos entre as variaveis
console.log(c)
console.log(d)

let valor // Variável não inicializada = undefined
console.log(valor)

valor = null // Variável com ausencia de valor - Não aponta para nenhum local na memória
console.log(valor)

const produto = {}
console.log(produto.preco)
produto.preco = 3.5
console.log(produto)
produto.preco = undefined
console.log(produto)