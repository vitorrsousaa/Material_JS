function objetoParaArray(param){
    let resultado = []
    criarArray()

    function criarArray(){
        Object.entries(param).forEach (e => {
            resultado.push(e)
            
        })
    }
    console.log(resultado)    
}

objetoParaArray({nome: 'Maria', profissao: 'Desenvolvedora'})