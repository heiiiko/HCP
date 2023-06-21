/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = knex => {
  return knex.schema
    .createTableIfNotExists("users", table => {
    table.increments('user_id');
    table.string("name", 128).notNullable();
    table.string("surname", 128).notNullable();
    table.date("birthday").notNullable();
    table.string("address", 255).notNullable();
    table.string("phone", 15).notNullable();
  })
  .createTableIfNotExists("history", table => {
    table.increments('history_id');
    table.string("diagnosis").notNullable();
    table.string("symptoms").notNullable();
    table.string("description");
    table.date("created_at").notNullable();
    table.date("updated_at").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = knex => knex.schema
  .dropTableIfExists("users")
  .dropTableIfExists("history");
