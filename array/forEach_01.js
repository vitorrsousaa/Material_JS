const carros = ['BMW', 'Mercedes', 'Ferrari', 'Gol']

carros.forEach(function (nome, indice, array) { 
    console.log(`${indice + 1 }) ${nome}`)
    
})
// 1) BMW
// 2) Mercedes
// 3) Ferrari
// 4) Gol








const aprovados = [1,2,3]
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = nome => console.log(nome)
aprovados.forEach(exibirAprovados)