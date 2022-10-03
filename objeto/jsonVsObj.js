// json é um formato textual, que serve para comunicar entre as linguagens

const obj = { a:1, b:2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(obj)) // Como JSON é um formato de texto, ele exclui a função 

//console.log(JSON.parse("{a:1, b:2, c:3"))
//console.log(JSON.parse("{'a':1,'b':2, 'c':3"))
const resultado = (JSON.parse('{"a":1,"b":2, "c":3}'))
console.log(JSON.parse('{"a":1,"b":"string", "c":true, "d": {}, "e": []}')) // Todo texto e atributo deve estar limitado por aspas duplas
console.log(resultado)