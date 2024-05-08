let saldo = saldoVitorias (120, 20)
let nivelFinal = nivelHeroi ()
console.log (`O Herói tem de saldo de ${saldo} está no nível ${nivelFinal}`)

function saldoVitorias (vitorias, derrotas)
{
    return vitorias - derrotas
}

function nivelHeroi ()
{
    let nivel
    switch (true)
    {
        case saldo <= 10:
            nivel = "Ferro"
            break

        case saldo >= 11 && saldo <= 20:
            nivel = "Bronze"
            break

        case saldo >= 21 && saldo <= 50:
            nivel = "Prata"
            break

        case saldo >= 51 && saldo <= 80:
            nivel = "Ouro"
            break

        case saldo >= 81 && saldo <= 90:
            nivel = "Diamante"
            break

        case saldo >= 91 && saldo <= 100:
            nivel = "Lendário"
            break

        case saldo > 100:
            nivel = "Imortal"
            break

        default:
            console.log ("Nivel do herói desconhecido!")
            
    }

    return nivel
}