console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "bola" //Acrescentar um valor dentro do objeto
obj1['nome2'] = 'bola2' // Acrescentar valor dentro de um objeto

console.log(obj1.nome2)

function Obj(nome) {
    this.nome = nome
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)