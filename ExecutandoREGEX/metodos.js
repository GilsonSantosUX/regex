const text = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"


console.log("Metodos do RegExp")
const regex = RegExp('9')
console.log(regex.test(text))
console.log(regex.exec(text))

console.log("\nMetodos da String")
const outroRegex = /[a-f]/g
console.log(text.match(outroRegex))
console.log(text.search(outroRegex)) // Retorna o indice do primeiro elemento que foi encontrado
console.log(text.replace(outroRegex,"achei")) // Replace subistitui o valor que o regex acho e troca pelo value passado!
console.log(text.split(outroRegex)) // Split recorta o valor que o regex
