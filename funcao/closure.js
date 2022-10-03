// Closure é o escopo criado quando a função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas a função
// Contexto léxico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro () { // A função tem ciencia de onde ela foi definida
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())