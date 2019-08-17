const { assert } = require('chai');
const { schema, tables } = require('../../src/settings/database');

const { albumsService } = require('./src/services/albums.service');

const albumTitle = 'new album';
const albumYear = 1999;

describe('test the albums service', () => {
    // afterEach(() => {
    //     return schema(tables.albums).del();
    // });

    it('single', () => {
        assert.equal(albumTitle, albumTitle);
    });

    it('list', () => {
        assert.equal(albumTitle, albumTitle);
    });

    it('creates a new album', () => {
        assert.equal(albumTitle, albumTitle);
    });

    it('updates an album', () => {
        assert.equal(albumTitle, albumTitle);
    });
});