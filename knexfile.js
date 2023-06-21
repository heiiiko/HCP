// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    // connection: process.env.CONNECTION_URL,
    connection: {
      host: '127.0.0.1',
      port: 5432,
      user: 'postgres',
      password: 'admin',
      database: 'HCP',
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: { directory: './database/seeds' },
  },
};
