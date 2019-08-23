const albumsService = require("../services/albums.service");
const artistsService = require("../services/artists.service");
const genresService = require("../services/genres.service");
const musicsService = require("../services/musics.service");
const playlistsService = require("../services/playlists.service");

const AlbumsMutation = require('./mutations/albums.mutation');
const ArtistsMutation = require('./mutations/artists.mutation');
const GenresMutation = require('./mutations/genres.mutation');
const MusicsMutation = require('./mutations/musics.mutation');
const PlaylistsMutation = require('./mutations/playlists.mutation');

module.exports = {
    Query: {
        album: async (_, { id }) => await albumsService.single({ id }),
        albums: async () => await albumsService.list(),
        artist: async (_, { id }) => await artistsService.single({ id }),
        artists: async () => await artistsService.list(),
        genre: async (_, { id }) => await genresService.single({ id }),
        genres: async () => await genresService.list(),
        music: async (_, { id }) => await musicsService.single({ id }),
        musics: async () => await musicsService.list(),
        playlist: async (_, { id }) => await playlistsService.single({ id }),
        playlists: async () => await playlistsService.list()
    },
    Mutation: {
        albums: () => AlbumsMutation,
        artists: () => ArtistsMutation,
        genres: () => GenresMutation,
        musics: () => MusicsMutation,
        playlists: () => PlaylistsMutation
    },
    Album: {
        musics: async (album) => await albumsService.listMusicsFromAlbum(album.id),
        artists: async (album) => await albumsService.listArtistsFromAlbum(album.id)
    },
    Artist: {
        albums: async (artist) => await artistsService.listAlbumsFromArtist(artist.id)
    },
    Music: {
        albums: async (music) => await musicsService.listAlbumsFromMusic(music.id),
        genre: async (music) => await genresService.single({ id: music.genre_id })
    },
    Playlist: {
        musics: async (playlist) => await playlistsService.listMusicsFromPlaylist(playlist.id)
    }
}
