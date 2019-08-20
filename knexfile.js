require('dotenv').config()

module.exports = {
  test: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST_TEST,
      user: process.env.MYSQL_USER_TEST,
      password: process.env.MYSQL_PASSWORD_TEST,
      database: process.env.MYSQL_DATABASE_TEST
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
  develop: {
    client: 'mysql',
    connection: {
      database: process.env.MYSQL_DATABASE_DEVELOP,
      user: process.env.MYSQL_USER_DEVELOP,
      password: process.env.MYSQL_PASSWORD_DEVELOP
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
