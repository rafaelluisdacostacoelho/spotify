const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  test: {
    client: 'mysql',
    connection: {
      server: process.env.MYSQL_HOST_TEST,
      database: process.env.MYSQL_DATABASE_TEST,
      user: process.env.MYSQL_USER_TEST,
      password: process.env.MYSQL_PASSWORD_TEST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/persistences/migrations'
    },
    seeds: {
      directory: __dirname + '/persistences/seeds'
    }
  },
  development: {
    client: 'mysql',
    connection: {
      database: process.env.MYSQL_DATABASE_DEVELOPMENT,
      user: process.env.MYSQL_USER_DEVELOPMENT,
      password: process.env.MYSQL_PASSWORD_DEVELOPMENT
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/persistences/migrations'
    },
    seeds: {
      directory: __dirname + '/persistences/seeds'
    }
  }
};
