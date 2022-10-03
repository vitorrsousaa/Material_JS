function Carro (velocidadeMaxima = 200, delta = 5 ) {
    // atributo privado da função
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico
    this.getvelocidadeAtual= function() { 
        return velocidadeAtual // transofrmou um item privado em publico
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new Carro (350, 30)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())