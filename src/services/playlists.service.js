const database = require('../settings/database');

module.exports = {
    single: async ({ id }) =>
        await database('playlists')
            .where({ id })
            .first(),

    list: async () => await database('playlists'),

    create: async ({ playlist }) => {
        const [id] = await database('playlists')
            .insert({
                name: playlist.name
            });

        return await database('playlists').where({ id }).first();
    },

    update: async ({ id, playlist }) =>
        await database('playlists')
            .where({ id })
            .update({
                name: playlist.name
            }),

    delete: async ({ id }) =>
        await database('playlists')
            .where({ id })
            .del(),

    listMusicsFromPlaylist: async (id) =>
        await database('musics as x')
            .innerJoin('playlists_musics as y', 'y.music_id', 'x.id')
            .whereIn('y.playlist_id', '=', id)
};