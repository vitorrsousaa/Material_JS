// Object.preventExtensions - Proibe que seja adicionado novos atributos no objeto

const produto = Object.preventExtensions(
    {nome: 'Qualquer', preco: 1.99, tag: 'promoção'}
)
console.log('Extensivel: ', Object.isExtensible(produto)) // Verifica se o produto é extensivel

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca' // Mas não é possível adicionar novos atributos
delete produto.tag // Conseguimos deletar atributo do objeto
console.log(produto)

// Object.seal - Conseguimos apenas alterar os objetos
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object freeze = selado + valores constantes
