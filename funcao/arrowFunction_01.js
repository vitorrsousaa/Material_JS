function dobro(a) {
    return a*2
}
console.log(dobro(10))
// 20

let  dobro1 = function (a) {
    return 2 * a
}
console.log(dobro1(10))
// 20

dobro2 = (a) => {
    return 2 * a
}
console.log(dobro2(10))
// 20

dobro3 = a => 2 * a 
console.log(dobro3(10))
// 20

let ola = function () {
    return ' Olá'
}

ola = () => 'Olá'
ola = _ =>'Olá' //possui um parametro
// console.log(ola())