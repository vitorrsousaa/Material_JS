let meses = ['Janeiro','Fevereiro','Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

function nomeDoMes(valor){
    let meses = ['Janeiro','Fevereiro','Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    mesCorreto = meses[valor - 1]

    console.log(this.mesCorreto)
}

console.log(meses.length)

nomeDoMes(2)
nomeDoMes(1)


