const knex = require('../persistences/knex');
const { tables } = require('../persistences/tables');

module.exports.albumsService = {
    single: async ({ id }) => await knex(tables.albums).where({ id }).first(),

    list: async () => await knex(tables.albums),

    create: async ({ album }) => {
        const request = {
            title: album.title,
            year: album.year
        };

        const [id] = await knex(tables.albums).insert(request);

        return await knex(tables.albums).where({ id }).first();
    },

    update: async ({ id, album }) => {
        const request = {
            title: album.title,
            year: album.year
        };

        return await knex(tables.albums)
            .where({ id })
            .update(request);
    },

    delete: async ({ id }) => await knex(tables.albums).where({ id }).del(),

    listMusicsFromAlbum: async (id) =>
        await knex
            .select(`${tables.musics}.*`)
            .from(tables.musics)
            .innerJoin(tables.albums_musics, `${tables.albums_musics}.music_id`, `${tables.musics}.id`)
            .where(`${tables.albums_musics}.album_id`, id),

    listArtistsFromAlbum: async (id) =>
        await knex
            .select(`${tables.artists}.*`)
            .from(tables.artists)
            .innerJoin(tables.albums_artists, `${tables.albums_artists}.artist_id`, `${tables.artists}.id`)
            .where(`${tables.albums_artists}.album_id`, id)
};