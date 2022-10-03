console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object) // Toda função possui um prototype

String.prototype.reverse = function () { // Acrescentou uma função dentro do prototype String.
    return this.split('').reverse().join('') // Agora toda string tem acesso a essa função
}
// Split quebra todo a string em um array com um determinado espaçador
// Join une um array em uma string 
console.log('Escola Coder'.reverse())

Array.prototype.first = function () {
    return this[0]
}

console.log(['vitor',1,2,3].first())