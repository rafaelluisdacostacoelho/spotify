const database = require('../config/database');

module.exports = {
    async single({ id }) {
        return await database('albums').where({ id }).first();
    },
    async list() {
        return await database('albums');
    },
    async create({ album }) {
        const [id] = await database('albums')
            .insert({
                title: album.title,
                year: album.year
            });

        return await database('albums').where({ id }).first();
    },
    update: async ({ id, album }) => {
        return database('albums').where({ id }).update({
            title: album.title,
            year: album.year
        });
    },
    delete: async ({ id }) => {
        return database('albums').where({ id }).del();
    }
};