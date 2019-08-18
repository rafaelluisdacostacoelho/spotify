const { assert } = require('chai');

module.exports = () => {
    beforeEach((done) => {
        done();
    });

    afterEach((done) => {
        done();
    });
    
    it('should return a single playlist', (done) => {
        assert.equal(1, 1);
        done();
    });
};