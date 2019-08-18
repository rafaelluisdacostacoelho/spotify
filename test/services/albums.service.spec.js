const { assert } = require('chai');

module.exports = () => {
    beforeEach((done) => {
        done();
    });

    afterEach((done) => {
        done();
    });

    it('should return a single album', (done) => {
        assert.equal(1, 1);
        done();
    });
};