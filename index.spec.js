process.env.NODE_ENV = 'test';

const { schema } = require('./persistences/knex');

const albumsServiceSpec = require('./test/services/albums.service.spec');
const artistsServiceSpec = require('./test/services/artists.service.spec');
const genresServiceSpec = require('./test/services/genres.service.spec');
const musicsServiceSpec = require('./test/services/musics.service.spec');
const playlistsServiceSpec = require('./test/services/playlists.service.spec');

describe('index test', () => {
    beforeEach((done) => {
        schema.migrate.latest().then(() => {
            schema.seed.run().then(() => {
                done();
            });
        });
    });

    afterEach((done) => {
        done();
    });

    describe('albums service', albumsServiceSpec.bind(this));
    describe('artists service', artistsServiceSpec.bind(this));
    describe('genres service', genresServiceSpec.bind(this));
    describe('musics service', musicsServiceSpec.bind(this));
    describe('playlists service', playlistsServiceSpec.bind(this));
});
