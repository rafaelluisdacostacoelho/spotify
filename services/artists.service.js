const { schema } = require('../settings/database');

module.exports.artistsService = {
    single: async ({ id }) => await schema('artists').where({ id }).first(),

    list: async () => await schema('artists'),

    create: async ({ artist }) => {
        const request = {
            name: artist.name
        };

        const [id] = await schema('artists').insert(request);

        return await schema('artists').where({ id }).first();
    },

    update: async ({ id, artist }) => {
        const request = {
            name: artist.name
        };

        return await schema('artists').where({ id }).update(request)
    },

    delete: async ({ id }) => await schema('artists').where({ id }).del(),

    listAlbumsFromArtist: async (id) =>
        await schema.select('albums.*').from('albums')
            .innerJoin('albums_artists', 'albums_artists.album_id', 'albums.id')
            .where('albums_artists.artist_id', id)
};