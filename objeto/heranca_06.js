function Aula(nome,video) {
    this.nome = nome
    this.videoID = video
}

const aula1 = new Aula('Bem vindo', 123) // O operador aponta para o prototype de Aula
const aula2 = new Aula('tchau', 456)
console.log(aula1, aula2)

//Simulando o new
function novo (f, ...params) { // '...' Une um conjunto de parametros como um array dentro de params
    const  obj = {}
    obj.__proto__ = f.prototype // Adicionando o prototype do objeto criado igual o proto da função
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'bye', 456)
console.log(aula3, aula4)