const { knexConfigMariaDB, knexConfigSQLite } = require('../dbconfig')
const knex = require('knex')
const knexMariaDB = knex(knexConfigMariaDB)
const knexSQLite = knex(knexConfigSQLite)
const { up: upProducts } = require('../migrations/20220825225944_tbl_productos')
const { up: upMessages } = require('../migrations/20220825225829_tbl_mensajes')

// TODO: Run "npm run createtables"
const createPopulate = async () => {
    // Crear tablas...
    await upProducts(knexMariaDB).then(response => console.log(response)).catch(err=>console.error(err))
    await upMessages(knexSQLite).then(response => console.log(response)).catch(err=>console.error(err))
    return 0
}

createPopulate()
    .then(res => { process.exit(res) })