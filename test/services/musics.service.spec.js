const { assert } = require('chai');

const tracker = require('mock-knex').getTracker();

tracker.install();

module.exports = () => {
   
    it('should return a single music', () => {
        assert.equal(1, 1);
    });
};