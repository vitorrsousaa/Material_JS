function tratarErroELancar(erro){
    // throw new Error ('Deu erro seu idiota')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally { //ocorrendo o erro ou não, a função ira chamar o finally
        console.log('final')
    }
}

const obj = { name: 'Roberto'}
imprimirNomeGritado(obj)