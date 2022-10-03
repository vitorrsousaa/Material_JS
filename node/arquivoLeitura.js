const fs = require('fs')

const caminha = __dirname + '/arquivo.json'

// sincrono ... - Não é interessante utilizar para arquivos pesados
const conteudo = fs.readFileSync (caminha, 'utf-8')
console.log(conteudo)

// assincrono ...

fs.readFile(caminha, 'utf-8', (err, conteudo) => { 
    const config = JSON.parse(conteudo) // Transformamos o arquivos JSON em um objeto
    console.log(`${config.db.host}: ${config.db.port}`)
})
    // 1 Param - diretório  
    // 2 param - O editor que utlizamos para escrever
    // 3 Param - callback
    

const config = require('./arquivo.json')
console.log(config.db)

// o __dirname  retorna o diretório da pasta atual