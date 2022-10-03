const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

// O node entende que o contadorA e contadorB são o mesmo objeto
contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)
console.log(contadorB == contadorA)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor)
console.log(contadorC == contadorD)