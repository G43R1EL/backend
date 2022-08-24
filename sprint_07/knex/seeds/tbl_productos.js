/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tbl_productos').del()
  await knex('tbl_productos').insert([
    {id: 1, nombre: 'Multisplit LG 6000w', descripcion: 'Aire acondicionado multisplit LG 6000w', foto: 'https://picsum.photos/300/200', precio: 4500, stock: 5},
    {id: 2, nombre: 'Calefaccion Volcan 5000', descripcion: 'Calefaccion central Vocan 5000', foto: 'https://picsum.photos/300/200', precio: 2600, stock: 15},
    {id: 3, nombre: 'Heladera Drean', descripcion: 'Heladera Drean 4000 inverter', foto: 'https://picsum.photos/300/200', precio: 3500, stock: 2},
    {id: 4, nombre: 'Parrilla Tromen', descripcion: 'Parrilla Tromen interior 50lts', foto: 'https://picsum.photos/300/200', precio: 3200, stock: 3}
  ]);
};
