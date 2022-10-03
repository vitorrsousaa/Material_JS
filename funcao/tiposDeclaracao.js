/* O operador do Java carrega todas as funções antes de rodar o código
O que nos permite chamar a função antes de declarar, quando utilizamos a 
function declaration*/
console.log(soma(3,4))

// function declaration 
function soma(x,y) {
    return (x + y)
}

// function expression
const sub = function (x,y) {
    return x-y
}

//