// oeprador ...rest (juntar) / spread(espalhar)
// usar rest como parametro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12345}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Vitor']
const grupoFinal = ['Maria', ...grupoA,'Rafaela']
console.log(grupoFinal)
