/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tbl_mensajes',(table)=>{
        table.increments('id').primary().unique().notNullable()
        table.string('email',255).notNullable()
        table.string('date',255).notNullable()
        table.string('message',255).notNullable()

    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tbl_mensajes')
}
