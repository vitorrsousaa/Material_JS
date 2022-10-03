

function minhaFuncao () {
    console.log(valor)
}

function exec () {
    const valor = 'Local'
    minhaFuncao()
}
const valor = 'Global'
exec()

/* Embora chamamos a função em outro contexto, a função carrega consigo o local onde ela foi definida. 
Como quem esta procurando o valor é a 'minha função', ela vai procurar no escopo global */