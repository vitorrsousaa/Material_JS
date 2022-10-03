
function falarDepoisde(segundos, frase) {
    return new Promise ((resolve, reject) => { // resolve é um parametro que vai ser chamado quando a chamada for atendida
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisde(3, 'QUE LEGAL *').then(frase => frase.concat('??!?')).then(outraFrase => console.log(outraFrase))