const knexfile = require('../knexfile')
const knex = require('knex')(knexfile)

module.exports = knex

// knex('artists').insert({
//     name: 'Bruce Dickinson'
// })

// knex('artists').select('*').then(resultado => console.log(resultado))
// knex('artists').then(resultado => console.log(resultado))
// knex('artists').first().then(resultado => console.log(resultado))
// knex('artists').where({ id: 1 }).then(resultado => console.log(resultado))