class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // Sginifica que o prototipo de pai é o avo
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // Vai puxar o sobrenome do seu prototipo
        this.profissao=profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)