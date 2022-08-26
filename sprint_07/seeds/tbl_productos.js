/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tbl_productos').del()
  await knex('tbl_productos').insert([
    {id: 1, title: 'Multisplit LG 6000w', thumbnail: 'https://picsum.photos/300/200', price: 4500},
    {id: 2, title: 'Calefaccion Volcan 5000', thumbnail: 'https://picsum.photos/300/200', price: 2600},
    {id: 3, title: 'Heladera Drean', thumbnail: 'https://picsum.photos/300/200', price: 3500},
    {id: 4, title: 'Parrilla Tromen', thumbnail: 'https://picsum.photos/300/200', price: 3200}
  ])
}