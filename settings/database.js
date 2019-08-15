const knexfile = require('./knexfile');
const knex = require('knex')(knexfile);

module.exports.schema = knex;

module.exports.tables = {
    albums: 'albums',
    albums_artists: 'albums_artists',
    albums_musics: 'albums_musics',
    artists: 'artists',
    genres: 'genres',
    musics: 'musics',
    playlists: 'playlists',
    playlists_musics: 'playlists_musics'
}

// https://alexzywiak.github.io/knex-bag-o-functions-modeling-many-to-many-relationships-in-node-2/index.html