const database = require('../config/database');

module.exports = {
    single: async ({ id }) => await database('artists').where({ id }).first(),
    list: async () => await database('artists'),
    create: async ({ artist }) => {
        const [id] = await database('artists')
            .insert({
                name: artist.name
            });

        return await database('artists').where({ id }).first();
    },
    update: async ({ id, artist }) => {
        return database('artists').where({ id }).update({
            name: artist.name
        });
    },
    delete: async ({ id }) => {
        return database('artists').where({ id }).del();
    }
};