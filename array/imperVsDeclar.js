const alunos = [ 
    {nome: 'Vitor', nota: 7.2},
    {nome: 'joao', nota: 9.7}
]


// Imperativo - Enfase na maneira como as coisas devem ser feitas
let total1 = 0

for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
    
}

console.log(total1 / alunos.length)

// Declarativo - enfase no que deve ser feito
const getNota = aluno => aluno.nota
const soma = (total,atual) => total+ atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)