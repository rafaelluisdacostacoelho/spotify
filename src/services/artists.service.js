const database = require('../settings/database');

module.exports = {
    single: async ({ id }) =>
        await database('artists')
            .where({ id })
            .first(),

    list: async () => await database('artists'),

    create: async ({ artist }) => {
        const [id] = await database('artists')
            .insert({
                name: artist.name
            });

        return await database('artists').where({ id }).first();
    },

    update: async ({ id, artist }) =>
        await database('artists')
            .where({ id })
            .update({
                name: artist.name
            }),

    delete: async ({ id }) =>
        await database('artists')
            .where({ id })
            .del(),
            
    listAlbumsFromArtist: async (id) =>
        await database('albums as x')
            .innerJoin('albums_artists as y', 'y.album_id', 'x.id')
            .where('y.artist_id', id)
};