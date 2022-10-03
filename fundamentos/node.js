let a = 3 
global.b = 123

/* Tanto o this, como o global, criam variaveis globais, que podem ser utilizadas em qualuqer momento do código.
Já o let, ou const, criam variáveis dentro de um escopo. Que só podem ser usadas naquele momento */
this.c = 456
this.d = false
this.e = 'testes'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// SEMPRE EVITAR A UTILIZAÇÃO DO ESCOPO GLOBAL
abc = 3 //NUNCA FAÇA ISSO 
console.log(global.abc)