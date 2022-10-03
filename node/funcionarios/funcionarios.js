const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // O axios é a biblioteca que faz a rquisição para http

const chinesas = f => f.pais == 'China'
const mulheres = f => f.genero == 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func: funcAtual
}

/* 
REDUCE -
Salario do funcionário que esta no acumulador, for menor do que o salario do funcionario que esta como atual
Então retorne func : 'caso contrário' retorne funcionário atual
*/

const homens = h => h.genero == 'M'
const primeiraLetra = p => p.nome[0] == 'R'
const maiorLetras = (func, funcAtual) => {
    return func.nome < funcAtual.nome ? func: funcAtual
}
const maiorSalario = (func, funcAtual) => {
    if (func.salario < funcAtual.salario) {
        func = funcAtual
    }
    return func
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    /* ENCONTRAR A MULHER CHINESA COM MENOR SALÁRIO
    
    const func = funcionarios
        .filter(chinesas)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func) 
    
    */


    /*  NOME MASCULINO QUE COMEÇA COM R, E QUE POSSUI O MENOR SALÁRIO

    const func = funcionarios
        .filter(homens)
        .filter(primeiraLetra)
        .reduce(menorSalario)

    console.log(func)

    */

    /* HOMEM COM MAIOR SALÁRIO E MAIOR QUANTIDADE DE LETRAS NO NOME 

    const func = funcionarios   
        .filter(homens)
        .filter(maiorLetras)
        .reduce(maiorSalario)      
        

    console.log(func)

    */
    
})



