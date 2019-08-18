const knex = require('../persistences/knex');
const tables = require('../persistences/tables');

module.exports.musicsService = {
    single: async ({ id }) => await knex(tables.musics).where({ id }).first(),

    list: async () => await knex(tables.musics),

    create: async ({ music }) => {
        const request = {
            name: music.name,
            url: music.url,
            duration: music.duration
        };

        const [id] = await knex(tables.musics).insert(request);

        return await knex(tables.musics).where({ id }).first();
    },

    update: async ({ id, music }) => {
        const request = {
            name: music.name,
            url: music.url,
            duration: music.duration
        };

        return await knex(tables.musics).where({ id }).update(request);
    },

    delete: async ({ id }) => await knex(tables.musics).where({ id }).del(),

    listAlbumsFromMusic: async (id) =>
        await knex
            .select(`${tables.albums}.*`)
            .from(tables.albums)
            .innerJoin(tables.albums_musics, `${tables.albums_musics}.album_id`, `${tables.albums}.id`)
            .where(`${tables.albums_musics}.music_id`, id)
};