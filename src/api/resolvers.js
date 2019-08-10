const database = require('../config/database')

const artistsService = require("../services/artists.service");
const musicsService = require("../services/musics.service");
const albumsService = require("../services/albums.service");
const playlistsService = require("../services/playlists.service");
const genresService = require("../services/genres.service");

const ArtistMutation = ({
    create: async ({ artist }) => await artistsService.create({ artist }),
    update: async ({ id, artist }) => await artistsService.update({ id, artist }),
    delete: async ({ id }) => await artistsService.delete({ id }),
})

const GenreMutation = ({
    create: async ({ genre }) => genresService.create({ genre }),
    update: async ({ id, genre }) => genresService.update({ id, genre }),
    delete: async ({ id }) => genresService.delete({ id }),
})

module.exports = {
    Query: {
        artist: async ({ id }) => await artistsService.single({ id }),
        artists: async () => await artistsService.list(),
        music: async ({ id }) => await musicsService.single({ id }),
        musics: async () => await musicsService.list(),
        album: async ({ id }) => await albumsService.single({ id }),
        albums: async () => await albumsService.list(),
        playlist: async ({ id }) => await playlistsService.single({ id }),
        playlists: async () => await playlistsService.list(),
        genre: async ({ id }) => await genresService.single({ id }),
        genres: async () => await genresService.list()
    },
    Mutation: {
        artist: () => ArtistMutation,
        genre: () => GenreMutation,
        
        musicCreate: async (_, { music }) => artistsService.create({ music }),
        musicUpdate: async (_, { id, music }) => musicsService.update({ id, music }),
        musicDelete: async (_, { id }) => musicsService.delete({ id }),

        albumCreate: async (_, { album }) => albumsService.create({ album }),
        albumUpdate: async (_, { id, album }) => albumsService.update({ id, album }),
        albumDelete: async (_, { id }) => albumsService.delete({ id }),

        playlistCreate: async (_, { playlist }) => playlistsService.create({ playlist }),
        playlistUpdate: async (_, { id, playlist }) => playlistsService.update({ id, playlist }),
        playlistDelete: async (_, { id }) => playlistsService.delete({ id }),
    },
    Artist: {
        albums: async (parent) => await database('albums').whereIn('id', database.select('id').from('albums_artists').where('artist_id', parent.id))
    },
    Music: {
        albums: async (music) => await database('albums').whereIn('id', database.select('id').from('albums_musics').where('music_id', music.id)),
        genre: async (music) => await database('genres').where({ id: music.genre_id }).first()
    },
    Album: {
        musics: async (parent) =>
            await database('musics').whereIn('id', database.select('id').from('albums_musics').where('album_id', parent.id)),
        artists: async (parent) =>
            await database('artists').whereIn('id', database.select('id').from('albums_artists').where('album_id', parent.id))
    },
    Playlist: {
        musics: async (playlist) => playlistsMusicsService.listMusicsFromPlaylist(playlist.id)
    }
}
