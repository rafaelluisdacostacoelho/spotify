const database = require('../settings/database');

module.exports = {
    single: async ({ id }) =>
        await database('musics')
            .where({ id })
            .first(),

    list: async () => await database('musics'),

    create: async ({ music }) => {
        const [id] = await database('musics')
            .insert({
                name: music.name,
                url: music.url,
                duration: music.duration
            });

        return await database('musics').where({ id }).first();
    },

    update: async ({ id, music }) =>
        await database('musics')
            .where({ id })
            .update({
                name: music.name,
                url: music.url,
                duration: music.duration
            }),

    delete: async ({ id }) =>
        await database('musics')
            .where({ id })
            .del(),

    listAlbumsFromMusic: async (id) =>
        await database('albums as x')
            .innerJoin('albums_musics as y', 'y.album_id', 'x.id')
            .where('y.music_id', '=', id)
};