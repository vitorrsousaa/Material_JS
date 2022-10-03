const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna o caracter da string na posição
console.log(escola.charAt(9)) // Caso solicite um valor que não esta na string, o JS não dará erro. Ele apenas não vai retornar nada
console.log(escola.charCodeAt(3)) // Retorna o valor do caracter na tabela unicode
console.log(escola.substring(1)) // Retorna a string a partir da posição solicitada, incluindo esta.
console.log(escola.substring(0, 3)) // Retornar a string cortada em um intervalo. O primeiro valor vai estar incluso no intervalo, e o ultimo não 

console.log("Escola".concat(escola).concat("!")) // Concatenar as strings
console.log(escola.replace(3, "e")) // Substitui o valor na posição 3 pela string
console.log(escola.replace(/\w/g, 'e')) // Substitui todos os valores pela string

console.log("Ana,Maria,Pedro".split(",")) // Transforma a string em array
console.log("Veieteoer".split("e")) // Transforma a string em array 