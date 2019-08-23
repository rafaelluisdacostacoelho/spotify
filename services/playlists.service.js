const knex = require('../persistences/knex');
const tables = require('../persistences/tables');

module.exports = {
    single: async ({ id }) => await knex(tables.playlists).where({ id }).first(),

    list: async () => await knex(tables.playlists),

    create: async ({ playlist }) => {
        const request = {
            name: playlist.name
        };

        const [id] = await knex(tables.playlists).insert(request);

        return await knex(tables.playlists).where({ id }).first();
    },

    update: async ({ id, playlist }) => {
        const request = {
            name: playlist.name
        };

        return await knex(tables.playlists).where({ id }).update(request);
    },

    delete: async ({ id }) => await knex(tables.playlists).where({ id }).del(),

    listMusicsFromPlaylist: async (id) =>
        await knex
            .select(`${tables.musics}.*`)
            .from(tables.musics)
            .innerJoin(tables.playlists_musics, `${tables.playlists_musics}.music_id`, `${tables.musics}.id`)
            .where(`${tables.playlists_musics}.playlist_id`, id)
};