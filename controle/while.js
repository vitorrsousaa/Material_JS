function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min //O random gera um valor entre 0 e 1
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao} .`)
}
console.log('Acabou ')