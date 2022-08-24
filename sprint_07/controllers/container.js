const knex = require('knex')

class Container {
    constructor(knexConfig) {
        knex(knexConfig)
    }
}

module.exports = Container