function removerPropriedade (remover, param) {
    const copia = new Object
    
    let destinoChaves = Object.keys(remover)
    let destinoValores = Object.values(remover)
    for (let i = 0; i<destinoChaves.length; i++){
        if ( destinoChaves[i] == param){
            
        } else {
            copia[destinoChaves[i]] = destinoValores[i]
        }
    }
    console.log(copia)

    
}


let remover = {id: 20, nome: 'caneta', preco: 12}
removerPropriedade(remover, 'nome')