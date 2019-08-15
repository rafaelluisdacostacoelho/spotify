const { schema, tables } = require('../settings/database');

module.exports.playlistsService = {
    single: async ({ id }) => await schema(tables.playlists).where({ id }).first(),

    list: async () => await schema(tables.playlists),

    create: async ({ playlist }) => {
        const request = {
            name: playlist.name
        };

        const [id] = await schema(tables.playlists).insert(request);

        return await schema(tables.playlists).where({ id }).first();
    },

    update: async ({ id, playlist }) => {
        const request = {
            name: playlist.name
        };

        return await schema(tables.playlists).where({ id }).update(request);
    },

    delete: async ({ id }) => await schema(tables.playlists).where({ id }).del(),

    listMusicsFromPlaylist: async (id) =>
        await schema
            .select(`${tables.musics}.*`)
            .from(tables.musics)
            .innerJoin(tables.playlists_musics, `${tables.playlists_musics}.music_id`, `${tables.musics}.id`)
            .where(`${tables.playlists_musics}.playlist_id`, id)
};