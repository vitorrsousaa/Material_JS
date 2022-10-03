function funcionarOuNao(valor, chanceErro) {
    return new Promise ((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

// Ao colocar o catch, ele chama a função reject
// O then chama a função resolve
funcionarOuNao('Testando ...', 0.9)
    .then(v => `Valor: ${v}`)
    .then(
        v=> console.log(b),
        err => console.log(`Erro esp.: ${err}`) // Podemos tratar o erro dentro do then
    )
    .catch(err => console.log(`Erro: ${err}`))