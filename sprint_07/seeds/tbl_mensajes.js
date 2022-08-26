/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tbl_mensajes').del()
  await knex('tbl_mensajes').insert([
    {id: 1, email: 'gabrielymarg@gmail.com', date: '25/8/2022, 19:03:37', message: 'Hola mundo!'}
  ])
}