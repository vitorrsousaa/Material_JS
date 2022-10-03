function inverso (valor) {
    if (Number.isInteger(valor) == true) {
        console.log(-valor)
    } else if ('boolean' === typeof valor){
        console.log(!valor)
    } else {
        console.log('Entre com um número ou tipo booleano')
    }
}

inverso (-1)
inverso (10)
inverso (true)
inverso (false)
inverso ('6')
