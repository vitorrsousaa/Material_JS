// tagged templates - processo o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'gui'
const situacao = 'aprovado'
console.log(`${aluno} está ${situacao}`)
console.log(tag `${aluno} está ${situacao}`)