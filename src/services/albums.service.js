const database = require('../settings/database');

module.exports = {
    single: async ({ id }) =>
        await database('albums')
            .where({ id })
            .first(),

    list: async () => await database('albums'),

    create: async ({ album }) => {
        const [id] = await database('albums')
            .insert({
                title: album.title,
                year: album.year
            });

        return await database('albums').where({ id }).first();
    },

    update: async ({ id, album }) =>
        await database('albums')
            .where({ id })
            .update({
                title: album.title,
                year: album.year
            }),

    delete: async ({ id }) =>
        await database('albums')
            .where({ id })
            .del(),

    listMusicsFromAlbum: async (id) =>
        await database('musics as x')
            .innerJoin('albums_musics as y', 'y.music_id', 'x.id')
            .where('y.album_id', '=', id),

    listArtistsFromAlbum: async (id) =>
        await database('artists as x')
            .innerJoin('albums_artists as y', 'y.artist_id', 'x.id')
            .where('y.album_id', '=', id)
};