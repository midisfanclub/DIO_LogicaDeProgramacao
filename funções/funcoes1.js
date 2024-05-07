console.log("------------- Aula 1 funçoes -------------")
console.log()

function torrar ()
{
    console.log("torrando pão")
}


function injetarPão()
{
    console.log("injetando pão")
    console.log("pão injetado")

    torrar()
}

injetarPão()

console.log()
console.log("------------- Aula 2 funçoes -------------")
console.log()

tostarPao("pão de forma integral")
tostarPao("pão de forma australiano", "Thaís") //preenchendo o valor da viável tipoPao
//uma função pode ter vários parâmetros

function tostarPao(tipoPao, nome = "Cliente X") //variável tipoPao recebe o valor preenchido em cima (quando a função é chamada)
// Cliente = valor default, se nenhum nome for passado, esse valor que vai aparecer na tela
{
    console.log("torrada feita com " + tipoPao)
    console.log("A torrada vai ser comida por " + nome)
}
