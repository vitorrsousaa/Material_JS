function multiplicar (min, max) {
    this.resultado
    this.soma = 0

    conferir ()

    function conferir() {
        if (min == 0) {
            resultado = 0
    
        } else {
            multiplos()
        }
    }

    function multiplos () {
        for ( let i = 1; i<=max; i++) {
            soma += min
        }
        resultado=this.soma
    }

     console.log(this.resultado)
}

multiplicar(0,3)
multiplicar(2,3)
multiplicar(5,5)