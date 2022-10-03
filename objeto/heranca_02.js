// Cadeia de protótipos
Object.prototype.attr0 ='0'
const avo = {attr1: 'a'}
const pai = { __proto__:avo, attr2: 'b', attr3: '3455'}
const filho = { __proto__:pai, attr3: 'c'}

console.log(filho.attr1)
console.log(filho.attr0)
console.log(filho.attr2)
console.log(filho.attr3)


const carro = { velAtual: 0, velMax: 200,
acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
        this.velAtual += delta
    } else {
        this.velAtual = this.velMax
    }
},
status () {
    return `${this.velAtual} Km/h de ${this.velMax} Km/h`
}
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //shadowing - o atributo sombrea o atribut do objeto prototipo
}

const volvo = {
    modelo: 'V40',
    status () {
        return `${this.modelo} : ${super.status()}` // O super faz com que o objeto utilize a função que esta dentro dele, com o mesmo nome da função de fora
        }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())