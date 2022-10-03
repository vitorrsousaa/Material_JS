/* A variável definidade dentro de um bloco de código,
pode ser utilizada em todo o código, pois ela se torna 
uma variável global */
{{{{ var sera = 'Será ????'}}}}
console.log(sera) 

/* Uma variável dentro de uma função, não possui um 
escopo global, e só pode ser utilizada dentro desta funçaõ */
function teste() {
    var local = 123
    console.log(local)
}

/* A variável let utiliza o que esta dentro do escopo ou bloco,
então conseguimos utilizar somente dentro do bloco. */
let numero = 1 
{
    let numero = 2
    console.log("dentro = ", numero)
}
console.log('fora = ', numero)