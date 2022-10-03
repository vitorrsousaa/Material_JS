const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

// tudo que existe nos outros módulos foram exportados dentro do objeto

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomdia)
console.log(moduloB.boanoite())
console.log(moduloB)

// Abrimos o terminal, e instalamos a biblioteca lodash utilizando o comando 'npm i lodash'
// Para evitar que a pasta seja transportada ao enviar o nosso projeto, criamos um arquivo chamado 'gitignore'
// E dentro desse arquivo vai o nome da pasta que vai ser ignorada

/* 
Instalamos a biblioteca nodemon
Para instalar a biblioteca na pasta global, utilizamos o código 'npm i -g nodemon'
*/