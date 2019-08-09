const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    scalar DateTime

    type Artist {
        id: ID,
        name: String,
        albums: [Album]
    }

    type Album {
        id: ID,
        title: String,
        year: Int,
        artists: [Artist],
        musics: [Music]
    }

    type Music {
        id: ID,
        name: String,
        url: String,
        duration: DateTime,
        albums: [Album],
        genre: Genre
    }

    type Genre {
        id: ID,
        name: String
    }

    type Playlist {
        id: ID,
        name: String,
        musics: [Music]
    }

    type Query {
        artist(id: ID!): Artist
        artists: [Artist],
        album(id: ID!): Album,
        albums: [Album],
        music(id: ID!): Music,
        musics: [Music],
        playlist(id: ID!): Playlist,
        playlists: [Playlist],
        genre(id: ID!): Genre,
        genres: [Music]
    }

    input ArtistInput {
        id: ID,
        name: String!
    }

    input AlbumInput {
        id: ID,
        title: String!,
        year: Int!
    }

    input MusicInput {
        id: ID,
        name: String!
        url: String!,
        duration: DateTime!
    }

    input PlaylistInput {
        id: ID,
        name: String!
    }

    input GenreInput {
        id: ID,
        name: String!
    }

    type Mutation {
        createArtist(artist: ArtistInput): Artist,
        updateArtist(id: ID, artist: ArtistInput): Boolean,
        deleteArtist(id: ID, artist: ArtistInput): Boolean,
        createAlbum(album: AlbumInput): Album,
        createMusic(music: MusicInput): Music,
        createGenre(genre: GenreInput): Genre,
        createPlaylist(playlist: PlaylistInput): Playlist
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})