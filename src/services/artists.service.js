const database = require('../config/database');

module.exports.ArtistsService = async => {
    get: async ({ id }) => await database('artists').where({ id }).first();
    create: async ({ artist }) => {
        const [id] = await database('artists')
            .insert({
                name: artist.name
            });

        return await database('artists').where({ id }).first();
    }
};