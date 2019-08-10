const database = require('../config/database');

module.exports = {
    single: async ({ id }) => await database('genres').where({ id }).first(),
    list: async () => await database('genres'),
    create: async ({ genre }) => {
        const [id] = await database('genres')
            .insert({
                name: genre.name
            });

        return await database('genres').where({ id }).first();
    },
    update: async ({ id, genre }) => {
        return database('genres').where({ id }).update({
            name: genre.name
        });
    },
    delete: async ({ id }) => {
        return database('genres').where({ id }).del();
    }
};