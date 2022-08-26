module.exports = class ContainerDB {
    constructor(knexConfig, tabla) {
        this.knex = require('knex')(knexConfig)
        this.tabla = tabla

    }

    async save (element) {
        try {
            return await this.knex(this.tabla).insert(element)
        } catch (err) {
            console.error(err)
        }
    }

    async getAll() {
        try {
            return await this.knex(this.tabla).select('*')
        } catch (err) {
            console.error(err)
        }
    }

    async getById(id) {
        try {
            return await this.knex(this.tabla).select('*').where('id',id)
        } catch (err) {
            console.error(err)
        }
    }

    async updateById(id, element) {
        try {
            return await this.knex(this.tabla).select('*').where('id',id).update({id,...element})
        } catch (err) {
            console.error(err)
        }
    }

    async deleteById(id) {
        try {
            return await this.knex(this.tabla).select('*').where('id',id).del()
        } catch (err) {
            console.error(err)
        }
    }

}