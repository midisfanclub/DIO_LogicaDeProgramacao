// && (and)

let idade = 18 
let vistoVerificado = true
console.log ( (idade >= 18) && (vistoVerificado == true))

console.log ("--------------------")

// || (or)

let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva")

console.log ("Nosso personagem pode sair? " + podeSair)

// ! (not)

let clima = "chuva"
let horario = 8
let resultado = !((tempo !== "chuva") && (horario > 6))

console.log (resultado)