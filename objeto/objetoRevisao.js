// Coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Apple'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['Marca do produto']
console.log(produto)


const carro = {
    modelo:'A4',
    valor: 89900,
    proprietario: {
        nome:'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua 133',
            numero: 123
        }
    },
    condutores: [{
        nome:'Junior',
        idade: 19
    }, {
        nome:'Ana',
        idade: 42
    }],
    calcularValorSeguro: function () {
        // ..
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Rua gigante'
//console.log(carro)

delete carro.calcularValorSeguro
delete carro.proprietario
//console.log(carro)