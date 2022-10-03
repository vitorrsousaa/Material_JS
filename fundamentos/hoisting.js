console.log('a = ', a)
var a = 2
console.log('a = ', a)

/* O JS realiza o hoisting, e sobe a declaraçao da variável.
Os dois código são iguais. */

var a
console.log('a = ', a)
a = 2
console.log('a = ', a)

// O mesmo não ocorre com declaração de let