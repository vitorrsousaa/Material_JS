// Par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'FAlaaaaa ' // contexto léxico 2 
    return saudacao
}

// Objetos são grupos aninhados de pares nome / valor
const cliente = {
    nome: 'Pedro',
    idade: 12,
    peso: 90,
    endereço: {
        logradouro: 'Rua legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)