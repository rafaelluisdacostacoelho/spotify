const { assert } = require('chai');

const { albumsService } = require('../../services/albums.service');

const knex = require('../../persistences/knex');

require('mock-knex').mock(knex);

const tracker = require('mock-knex').getTracker();

tracker.install();

tracker.on('query', function checkResult(query) {
    assert.equal(query.method, 'first');
    query.response([{
        id: 1,
        title: 'TESTE 1',
        year: 1998
    }, {
        id: 2,
        title: 'TESTE 2',
        year: 2016
    }, {
        id: 3,
        title: 'TESTE 3',
        year: 1945
    }]);
});

module.exports = () => {
    beforeEach((done) => {
        done();
    });

    afterEach((done) => {
        done();
    });

    it('should return a single album', async () => {
        const album = await albumsService.single({ id: 1 });

        assert.equal(album.id, 1);
        assert.equal(album.title, 'TESTE 1');
        assert.equal(album.year, 1998);
    });
};