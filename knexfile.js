module.exports = {
  test: {
    client: 'sqlite3',
    useNullAsDefault: true
  },
  develop: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD
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
