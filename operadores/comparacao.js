// = atribuiçaõ
// == para comparar o valor 
// === para comparar o valor e o formato do conteúdo 

let numero = "1"
console.log ( numero == 1) //true 
console.log (numero === 1) //false (formatos diferentes)

console.log ("--------------------")

let cpfBloqueado = "123.456.789-10"
let cpfUsuario = "111.222.333-44"
let bloquear = cpfUsuario === cpfBloqueado

console.log ("o usuario está barrado? " + bloquear)
