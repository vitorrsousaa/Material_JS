const pessoa = {
    saudacao: 'Bom dia ',
    falar () {
        console.log(this.saudacao) // O this permite acessar a palavra saudacao de dentro do objeto
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conlito entre paradgimas: funcional e referencial

const falarDePessoa = pessoa.falar.bind(pessoa) // Amarra um determinado objeto para ele ser o referencial
falarDePessoa()
