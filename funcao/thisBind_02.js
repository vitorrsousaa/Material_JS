function pessoa() {
    this.idade = 0

    const self = this // Nesse momento, o this recebe o valor que eu quero
    setInterval(function() {
        self.idade++
        console.log(self.idade) // Utilizamso o self para associar ao this
    }/* .bind(this) */, 1000) //O bind referenciaria que o this pertence ao objeto da função 
}

new pessoa