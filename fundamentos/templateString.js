const nome = "Rebeca"
const concatenacao = 'Olá' + nome + '!'
const template = `
    Olá
    ${nome}! Tudo bem?`

console.log(`1 + 1 = ${1+1}`) // Expressão dentro do template string

console.log(concatenacao, template)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)