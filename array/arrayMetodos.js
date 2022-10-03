const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // deleta o elemento da ultima posição
console.log(pilotos)

pilotos.shift() // delete o elemento da primeira posição
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento na ultima da posição
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição
console.log(pilotos)

// splice pode adicionar ou remover
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array a partir do indice 2, incluindo a posição 2 
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Vai criar um novo array incluindo o indice 1, mas sem incluir o indice 4
console.log(algunsPilotos2)