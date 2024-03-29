const dotenv = require('dotenv').config()

const knexConfigMariaDB = {
    client: 'mysql',
    connection: {
        host: process.env.DATABASE_HOST || 's3rv3r.ngcomputers.com.ar',
        port: process.env.DATABASE_PORT || 3306,
        user: process.env.DATABASE_USER || 'coderhouse',
        password: process.env.DATABASE_PASSWORD || 'P@ssw0rd',
        database: process.env.DATABASE_NAME || 'coderhouse_db'
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './migrations'
    },
    seeds: {
        tableName: 'knex_seeds',
        directory: './seeds'
    }
}

const knexConfigSQLite = {
    client: 'sqlite3',
    connection: {
        filename: './data/messages.sqlite',
        database: 'main'
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './migrations'
    },
    seeds: {
      tableName: 'knex_seeds',
      directory: './seeds'
    },
    useNullAsDefault: true
}

module.exports = {
    knexConfigMariaDB,
    knexConfigSQLite
}