const { schema } = require('../settings/database');

module.exports.albumsService = {
    single: async ({ id }) => await schema('albums').where({ id }).first(),

    list: async () => await schema('albums'),

    create: async ({ album }) => {
        const request = {
            title: album.title,
            year: album.year
        };

        const [id] = await schema('albums').insert(request);

        return await schema('albums').where({ id }).first();
    },

    update: async ({ id, album }) => {
        const request = {
            title: album.title,
            year: album.year
        };

        return await schema('albums')
            .where({ id })
            .update(request);
    },

    delete: async ({ id }) => await schema('albums').where({ id }).del(),

    listMusicsFromAlbum: async (id) =>
        await schema.select('musics.*').from('musics')
            .innerJoin('albums_musics', 'albums_musics.music_id', 'musics.id')
            .where('albums_musics.album_id', id),

    listArtistsFromAlbum: async (id) =>
        await schema.select('*').from('artists')
            .innerJoin('albums_artists', 'albums_artists.artist_id', 'artists.id')
            .where('albums_artists.album_id', id)
};