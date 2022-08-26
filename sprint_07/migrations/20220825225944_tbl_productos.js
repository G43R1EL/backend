/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('tbl_productos',(table)=>{
        table.increments('id').primary().unique().notNullable()
        table.string('title',255).notNullable()
        table.string('thumbnail',255).notNullable()
        table.float('price',12, 2).notNullable()

    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('tbl_productos')
}
