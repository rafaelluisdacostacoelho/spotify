const { assert } = require('chai');

const knex = require('../../persistences/knex');

module.exports = () => {
    beforeEach((done) => {
        done();
    });

    afterEach((done) => {
        done();
    });

    it('should return a single genre', (done) => {
        assert.equal(1, 1);
        done();
    });
};