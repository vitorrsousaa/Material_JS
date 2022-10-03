// A chave pode ser um número, objeto, função, qualquer coisa
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{},'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl,ch) => {
    console.log(ch, vl)
})

// verifica se o número esta contido 
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

// Não podemos ter a mesma chave, mas o mesmo valor
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)