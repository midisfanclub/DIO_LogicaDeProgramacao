let userName = getFirstName ("Felipe Dos Santos Amaral", " ")
console.log ("bem vindo, " + userName)


userName = getFirstName ("Igor-Dos-Santos-Amaral", "-")
console.log ("bem vindo, " + userName)

function getFirstName(name, splitChar)
{
    let firstName = name.split (splitChar) [0]
    //let firstName = name.split (" ") [0] //quebra cada lugar que tem espaço (" ") e coloca no vetor
    return firstName
}