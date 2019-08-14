const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);

module.exports.schema = knex;

module.exports.tables = {
    albums: 'albums',
    artists: 'artists',
    genres: 'genres',
    musics: 'musics',
    playlists: 'playlists'
}

// https://alexzywiak.github.io/knex-bag-o-functions-modeling-many-to-many-relationships-in-node-2/index.html