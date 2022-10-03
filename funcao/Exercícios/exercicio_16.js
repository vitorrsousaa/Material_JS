function somarNumero(param) {
    let soma = 0 
    for (let i = 0; i < param.length; i++) {
        soma += param[i]
    }
    console.log(soma)
}

param =[10,10,10]
somarNumero(param)