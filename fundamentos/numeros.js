const peso1 = 1
const peso2= Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) // Confere se o valor é um número inteiro
console.log(Number.isInteger(peso2)) // Confere se o valor é um número inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // Imprimi apenas a quantidade de casas decimais que queremos utilizar
console.log(media.toString())  // Converte em string
console.log(media.toString(2))  // Converte em string no sistema binário
console.log(typeof media)
console.log (" ")

console.log(7/0)
console.log("10" * 2) // O javascript procura entender se é possível realizar a operação utilizando a string
console.log("show" * 2)
console.log(0.1 + 0.7)
