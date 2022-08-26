const { knexConfigMariaDB, knexConfigSQLite } = require('../dbconfig')
const knex = require('knex')
const knexMariaDB = knex(knexConfigMariaDB)
const knexSQLite = knex(knexConfigSQLite)
const { seed: seedProducts } = require('../seeds/tbl_productos')
const { seed: seedMessages } = require('../seeds/tbl_mensajes')

// TODO: Run "npm run populatetables"
const createPopulate = async () => {
    // Llenar tablas "CUIDADO!!! BORRA EL CONTENIDO..."
    await seedProducts(knexMariaDB).then(response => console.log(response)).catch(err=>console.error(err))
    await seedMessages(knexSQLite).then(response => console.log(response)).catch(err=>console.error(err))
    return 0
}

createPopulate()
    .then(res => { process.exit(res) })