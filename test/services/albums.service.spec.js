const { assert } = require('chai');
const { schema, tables } = require('../../src/settings/database');

const { albumsService } = require('./src/services/albums.service');

const albumTitle = 'new album';
const albumYear = 1999;

describe('services/albums.service', () => {
    afterEach(() => {
        return schema(tables.albums).del();
    });

    it('single', () => {
        var id = 1;

        return albumsService
            .single({ id })
            .then((album) => {
                assert.equal(album.title, albumTitle);
            });
    });

    it('list', () => {
        return
    });

    it('creates a new album', () => {

    });

    it('updates an album', () => {

    });
});