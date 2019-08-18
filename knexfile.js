module.exports = {
  test: {
    client: 'mysql',
    connection: {
      database: 'spotify_test',
      user: 'root',
      password: 'root'
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
      database: 'spotify',
      user: 'root',
      password: 'root'
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
