function repetir (param, max) {
    this.resultado=[]

    criar()

    function criar(){
        for (let i = 1; i<=max; i++){
            this.resultado.push(param)
            
        }
    }
    console.log(this.resultado)
   
}

repetir('codigo', 2)
repetir(7, 3)