const { assert } = require('chai');

const { albumsService } = require('../../services/albums.service');

const tracker = require('mock-knex').getTracker();

tracker.install();

tracker.on('query', function checkResult(query) {
    assert.equal(query.method, 'first');
    query.response([{
        id: 1,
        title: 'Fear of the Dark',
        year: 1992
    }, {
        id: 2,
        title: 'Killers',
        year: 1981
    }, {
        id: 3,
        title: 'Brave New World',
        year: 2000
    }]);
});

module.exports = () => {
    it('should return a single album', async () => {
        const album = await albumsService.single({ id: 1 });

        assert.equal(album.id, 1);
        assert.equal(album.title, 'Fear of the Dark');
        assert.equal(album.year, 1992);
    });
};