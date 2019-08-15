const { schema } = require('../settings/database');

module.exports.musicsService = {
    single: async ({ id }) => await schema('musics').where({ id }).first(),

    list: async () => await schema('musics'),

    create: async ({ music }) => {
        const request = {
            name: music.name,
            url: music.url,
            duration: music.duration
        };

        const [id] = await schema('musics').insert(request);

        return await schema('musics').where({ id }).first();
    },

    update: async ({ id, music }) => {
        const request = {
            name: music.name,
            url: music.url,
            duration: music.duration
        };

        return await schema('musics').where({ id }).update(request);
    },

    delete: async ({ id }) => await schema('musics').where({ id }).del(),

    listAlbumsFromMusic: async (id) =>
        await schema.select('albums.*').from('albums')
            .innerJoin('albums_musics', 'albums_musics.album_id', 'albums.id')
            .where('albums_musics.music_id', id)
};