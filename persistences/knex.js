const environment = process.env.NODE_ENV;

const knexfile = require('../knexfile')[environment];
const knex = require('knex')(knexfile);

module.exports.schema = knex;