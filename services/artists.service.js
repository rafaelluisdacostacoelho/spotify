const { schema } = require('../persistences/knex');
const { tables } = require('../persistences/tables');

module.exports.artistsService = {
    single: async ({ id }) => await schema(tables.artists).where({ id }).first(),

    list: async () => await schema(tables.artists),

    create: async ({ artist }) => {
        const request = {
            name: artist.name
        };

        const [id] = await schema(tables.artists).insert(request);

        return await schema(tables.artists).where({ id }).first();
    },

    update: async ({ id, artist }) => {
        const request = {
            name: artist.name
        };

        return await schema(tables.artists).where({ id }).update(request)
    },

    delete: async ({ id }) => await schema(tables.artists).where({ id }).del(),

    listAlbumsFromArtist: async (id) =>
        await schema
            .select(`${tables.albums}.*`)
            .from(tables.albums)
            .innerJoin(tables.albums_artists, `${tables.albums_artists}.album_id`, `${tables.albums}.id`)
            .where(`${tables.albums_artists}.artist_id`, id)
};