function repetir (max) {
    this.resultado=[]
    console.log(max)

    criar()

    function criar(){
        for (let i = 1; i<=max; i++){
            this.resultado.push('+')
            
        }
    }
    console.log(this.resultado)
   
}

repetir(5)