function contador() {
    this.idade = 0

    setInterval (() => {
        idade ++
        console.log(this.idade)
    },1000)
}

contador()
// 1....2....3....4.....5...6






