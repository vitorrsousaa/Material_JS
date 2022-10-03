console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array ('bia', 'carlos', 'ana')
console.log(aprovados)
console.log(aprovados.length)

aprovados = ['bia', 'carlos', 'ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'paulo'
aprovados.push('vitao') // adiciona no final do array

aprovados[9] = 'rafael' // Todos os elementos entre o 4 e 9 não ficar undefined
console.log(aprovados [8] === undefined)

console.log(aprovados)
aprovados.sort() // Alterou o array, colocou em ordem alfabetica
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['bia', 'carlos', 'ana']
aprovados.splice(1, 1, 'elemento1', 'elemento 2' ) 
/* splice (1, 2, param)
1 - posição do elemento que eu quero deletar
2 - quantos elementos eu quero deletar a partir da posição 
param - elementoq ue eu quero adicionar depois do delete 
*/
console.log(aprovados)

