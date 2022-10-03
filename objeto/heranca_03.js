const pai = {nome: 'Pedro', corCabelo:'preto'}
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {nome: {value: 'Bia', writable: false, enumerable:true}})

console.log(filha2.nome)
filha2.nome = 'Carla' // Não é possivel alterar pois definimos como false para writable
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? // Retorna se o atributo que estamos navegando foi adicionado ou se veio por herança
        console.log(key) : console.log(`Por herança: ${key}`) 
}