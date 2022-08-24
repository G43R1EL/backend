const dotenv = require("dotenv")
dotenv.config()

const DATABASE_HOST = process.env.DATABASE_HOST || "192.168.1.250";
const DATABASE_PORT = process.env.DATABASE_PORT || "3306";
const DATABASE_USER = process.env.DATABASE_USER || "coderhouse";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "P@ssw0rd";
const DATABASE_NAME = process.env.DATABASE_NAME || "coderhouse_db";

const knexConfig = {
    client: 'mysql',
    connection: {
        host: DATABASE_HOST,
        port: DATABASE_PORT,
        user: DATABASE_USER,
        password: DATABASE_PASSWORD,
        database: DATABASE_NAME
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: './knex/migrations'
    },
    seeds: {
        tableName: 'knex_seeds',
        directory: './knex/seeds'
    }
}

module.exports = knexConfig