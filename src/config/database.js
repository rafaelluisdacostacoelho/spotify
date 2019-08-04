const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

// knex('artists').insert({
//     name: 'Bruce Dickinson'
// }).then(data => console.log(data))

// knex('artists').select('*').then(result => console.log(result))
// knex('artists').then(result => console.log(result))
// knex('artists').first().then(result => console.log(result))
// knex('artists').where({ id: 1 }).then(result => console.log(result))