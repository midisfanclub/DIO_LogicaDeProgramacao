// estrutura de decisão

let fruta = "morango"

switch (fruta)
{
    case "laranja":
        console.log ("suco de laranja")
        break

    case "banana":
    case "morango":
    case "mamão":
        console.log ("vitamina de " + fruta)
        break

    case "maçã":
        console.log ("suco de maçã")
        break

    default:
    console.log ("Suco de caixinha")
}