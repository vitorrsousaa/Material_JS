let isAtivo = false

console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!isAtivo) // Contexto da negação

console.log("os verdadeiros")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("osfalsos")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

let nome = 'Lucas'
console.log(nome || "Desconhecido") // O JS converte as duas informações como verdadeiro ou falso
