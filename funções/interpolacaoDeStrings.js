createStringConnection ("db_products", "Felipe", "9876")

function createStringConnection (databaseName, user, pass)
{
    console.log(`connect: DBCONNECT; user = ${user}; pass = ${pass}; initial_database = ${databaseName}`)
}

// usar crase ` no inicio e no fim da string e sifrão $ antes das variáveis entre chaves{} interpoladas 