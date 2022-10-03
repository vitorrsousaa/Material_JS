// Estratégia 1 para gerar valor padrao
function soma1(a,b,c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a+ b + c
}

console.log(soma1(),soma1(3), soma1(1,2,3), soma1(0,0,0), soma1(1,2,'teste'))

// Estratégias 2, 3 e 4 para gerar valor padrão
function soma2 (a, b, c) {
    a = a !== undefined ? a:1 // Operador ternário, caso receba como parametro uma valor diferente de undefined, a retorna 1 
    b = 1 in arguments ? b : 1 // Operador ternário, irá verificar se existi o número 1 dentro de arguments
    c = isNaN(c) ? 1 : c // Verifica se o número é um número
    return a +b +c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0), soma2(2,3,'teste'))

// valor padra es2015
function soma3(a=1, b=1, c=1) {
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0), soma2(2,3,'teste'))