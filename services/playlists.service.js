const { schema } = require('../settings/database');

module.exports.playlistsService = {
    single: async ({ id }) => await schema('playlists').where({ id }).first(),

    list: async () => await schema('playlists'),

    create: async ({ playlist }) => {
        const request = {
            name: playlist.name
        };

        const [id] = await schema('playlists').insert(request);

        return await schema('playlists').where({ id }).first();
    },

    update: async ({ id, playlist }) => {
        const request = {
            name: playlist.name
        };

        return await schema('playlists').where({ id }).update(request);
    },

    delete: async ({ id }) => await schema('playlists').where({ id }).del(),

    listMusicsFromPlaylist: async (id) =>
        await schema.select('musics.*').from('musics')
            .innerJoin('playlists_musics', 'playlists_musics.music_id', 'musics.id')
            .where('playlists_musics.playlist_id', id)
};