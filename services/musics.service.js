const { schema, tables } = require('../settings/database');

module.exports.musicsService = {
    single: async ({ id }) => await schema(tables.musics).where({ id }).first(),

    list: async () => await schema(tables.musics),

    create: async ({ music }) => {
        const request = {
            name: music.name,
            url: music.url,
            duration: music.duration
        };

        const [id] = await schema(tables.musics).insert(request);

        return await schema(tables.musics).where({ id }).first();
    },

    update: async ({ id, music }) => {
        const request = {
            name: music.name,
            url: music.url,
            duration: music.duration
        };

        return await schema(tables.musics).where({ id }).update(request);
    },

    delete: async ({ id }) => await schema(tables.musics).where({ id }).del(),

    listAlbumsFromMusic: async (id) =>
        await schema
            .select(`${tables.albums}.*`)
            .from(tables.albums)
            .innerJoin(tables.albums_musics, `${tables.albums_musics}.album_id`, `${tables.albums}.id`)
            .where(`${tables.albums_musics}.music_id`, id)
};