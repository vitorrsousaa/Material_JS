// pessoa -> 123 -> {123} 
// A constante pessoa indica para um endereço de referencia onde tem um valor

const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- {...} <- 
//pessoa = {nome: 'Ana'} // Não conseguimos alterar o endereço de uma constante

const pessoa = {nome: 'João'}
Object.freeze (pessoa) // O objeto não pode mais ser alterado
pessoa.nome='MAria'
console.log(pessoa)
// { nome: 'João' }