// let e var
{
    let a = 2
    var b = 3
    console.log(a)
}
console.log(b)

// TEMPLATE STRING
const produto = 'iPad'
console.log(`${produto} é caro`)

// DESTRUCTURING
const [l, e, ...tras] = 'Coder'
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x,y)

const { idade:i, nome} = {nome:'Ana', idade: 9}
console.log(i, nome)