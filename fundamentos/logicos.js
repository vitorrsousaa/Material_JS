function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // operador ou
    const comprarTv50 = trabalho1 && trabalho2 // operador E
    // const comprarTv32 = !! (trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel } // O JS já vai criar o nome da chave igual o objeto
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))