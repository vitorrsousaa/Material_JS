// iife => Immediately Invoked Function Expression
// Qualquer coisa que for declarada dentro desta função, ficará apenas dentro da função. Ela foge do escopo global

(function () {
    console.log('Será executado na hora')
    var a = 10
}) ()

console.log(global.a)