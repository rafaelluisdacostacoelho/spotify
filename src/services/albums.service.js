const database = require('../settings/database');

module.exports.albumsService = {
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
        await database('musics')
            .whereExists(
                await database
                    .select('1')
                    .from('albums_musics')
                    .where('albums_musics.music_id', 'musics.id')
                    .andWhere('albums_musics.album_id', id)
                    .first()),

    listArtistsFromAlbum: async (id) =>
        await database('artists as x')
            .innerJoin('albums_artists as y', 'y.artist_id', 'x.id')
            .where('y.album_id', '=', id)
};