/* Utilizando o var para criar o looping, percebemos que ao imprimir o valor de i,
ele assume o ultimo valor de dentro do loop para o restante do código */
for (var i = 0; i<10; i++) {
    console.log(i)
}

console.log('i = ', i)

/* Ao utilizar o let, a variável só é utilizada dentro do loop */
for (let t = 0; t<10;t++) {
    console.log(t)
}
//console.log('t = ', t)

/* O exemplo abaixo acontece pois a var não tem escopo para função,
e o var determina a variavel para o código inteiro com o seu 
último valor. Ao utilizar o let, a função vai ter como variável o 
valor que ela foi adicionado naquele momento */
const funcs = []
for (var i = 0; i< 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs [1]()
funcs [8]()