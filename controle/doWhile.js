function gerarNumeroAleatorio (min, max) {
    const aleatorio = Math.random() * (max - min) + min
    return Math.floor(aleatorio)
}

let teste 

do {
    teste = gerarNumeroAleatorio(-1, 10)
    console.log('opção escolhida: ' + teste)
} while (teste != 1)

console.log('fim')

// Ele executa a repetição, independente do valor estar dentro do parametro ou não
// Não é necessário atribuir um valor para a variável