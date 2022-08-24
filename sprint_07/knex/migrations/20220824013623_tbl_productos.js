/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('tbl_productos', table => {
      table.increments('id').primary().notNullable()
      table.string('nombre',255).notNullable()
      table.string('descripcion', 255).notNullable()
      table.string('foto', 255).notNullable()
      table.integer('stock').notNullable()
      table.decimal('precio',9,2).notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('tbl_productos')
};
