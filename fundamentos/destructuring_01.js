const pessoa = {
    nome: 'Ana',
    idade: 15,
    endereco: {
        rua: 'Rua 41',
        numero: 21
    }

}

// Ao colocar as chaves antes, vamos tirar de dentro da estrutura do objeto
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)


// Se o dado estiver vazio, não vai dar erro. Mas caso solicitarmos um valor que não existe, via dar erro
const { endereco : {rua, numero, cep}} = pessoa
console.log(rua, numero, cep)