exports.up = function (knex, Promise) {
  return knex.schema.createTable('algorithm_results', (table) => {
    table.increments();
    table.integer('water_systems_id').notNullable().unsigned().references('id').inTable('water_systems').onDelete('CASCADE');
    table.json('algorithm_results_object')
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('algorithm_results');
};
