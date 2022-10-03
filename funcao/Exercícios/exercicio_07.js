function estaEntre (numero, minimo, maximo, inclusivo = false) {
    conferir()

    function conferir() {
        if (inclusivo == true) {
            incluir ()
        } else {
            relacao ()
        }
    }

    function incluir () {
        if (numero <=maximo && numero >=minimo) {
            console.log(!![])
        } else {
            console.log(!!0)
        }

    }

    function relacao () {
        if (numero < maximo && numero > minimo) {
            console.log(!![])
        } else {
            console.log(!!0)
        }
    }


}

estaEntre(3, 3, 150, true)
estaEntre(3, 10, 150)
estaEntre(3, 3, 150)

