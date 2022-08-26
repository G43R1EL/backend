const { knexConfigMariaDB, knexConfigSQLite } = require('../dbconfig')
const knex = require('knex')
const knexMariaDB = knex(knexConfigMariaDB)
const knexSQLite = knex(knexConfigSQLite)
const { down: downProducts } = require('../migrations/20220825225944_tbl_productos')
const { down: downMessages } = require('../migrations/20220825225829_tbl_mensajes')

// TODO: Run "npm run droptables"
const createPopulate = async () => {
    // Eliminar tablas...
    await downProducts(knexMariaDB).then(response => console.log(response)).catch(err=>console.error(err))
    await downMessages(knexSQLite).then(response => console.log(response)).catch(err=>console.error(err))
    return 0
}

createPopulate()
    .then(res => { process.exit(res) })