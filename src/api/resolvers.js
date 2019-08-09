const database = require('../config/database')

const ArtistsService = require("../services/artists.service");

module.exports = {
    Query: {
        artist: async (_, { id }) => await ArtistsService.get(id),
        artists: async () => await database('artists'),
        music: async () => await database('musics').where({ id }).first(),
        musics: async () => await database('musics'),
        album: async () => await database('albums').where({ id }).first(),
        albums: async () => await database('albums'),
        playlist: async () => await database('playlists').where({ id }).first(),
        playlists: async () => await database('playlists'),
        genre: async () => await database('genres').where({ id }).first(),
        genres: async () => await database('genres')
    },
    Mutation: {
        createArtist: async (_, { artist }) => {
            const [id] = await database('artists')
                .insert({
                    name: artist.name
                });

            return await database('artists').where({ id }).first();
        },
        updateArtist: async (_, { id, artist }) => {
            return database('artists').where({ id }).update({
                name: artist.name
            });
        },
        deleteArtist: async (_, { id }) => {
            return database('artists').where({ id }).del();
        },
        createMusic: async (_, { music }) => {
            const [id] = await database('musics').insert({
                name: music.name,
                url: music.url,
                duration: music.duration
            })

            return await database('musics').where({ id }).first()
        },
        createAlbum: async (_, { input }) => {
            const [id] = await database('albums').insert({
                title: input.title,
                year: input.year
            })

            return await database('albums').where({ id }).first()
        },
        createGenre: async (_, { genre }) => {
            const [id] = await database('genres')
                .returning('id')
                .insert({
                    name: genre.name
                });

            return await database('genres').where({ id }).first()
        },
        createPlaylist: async (_, { input }) => {
            const [id] = await database('playlists').insert({
                name: input.name
            })

            return await database('playlists').where({ id }).first()
        }
    },
    Artist: {
        albums: async (parent) => await database('albums').whereIn('id', database.select('id').from('albums_artists').where('artist_id', parent.id))
    },
    Music: {
        albums: async (music) => await database('albums').whereIn('id', database.select('id').from('albums_musics').where('music_id', music.id)),
        genre: async (music) => await database('genres').where({ id: music.genre_id }).first()
    },
    Album: {
        musics: async (parent) => await database('musics')
            .whereIn('id', database.select('id').from('albums_musics').where('album_id', parent.id)),
        artists: async (parent) => await database('artists')
            .whereIn('id', database.select('id').from('albums_artists').where('album_id', parent.id))
    },
    Playlist: {
        musics: async (parent) => await database('musics')
            .whereIn('id', database.select('id').from('playlists_musics').where('playlist_id', parent.id))
    }
}
