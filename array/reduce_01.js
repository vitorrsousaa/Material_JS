const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota))

// O reduce é responsável por chamar uma função callback, que recebe como parametros os valores anteriores, atuais, e o array atual
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) { 
    return acumulador + atual 
}, /* 10 */ ) // Podemos passar um valor inicial para começar a função callback

console.log(resultado)