const resolvers = require('./resolvers');
const gql = require('graphql-tag');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = gql`
    scalar DateTime

    type Artist {
        id: ID
        name: String
        albums: [Album]
    }

    type Album {
        id: ID
        title: String
        year: Int
        artists: [Artist]
        musics: [Music]
    }

    type Music {
        id: ID
        name: String
        url: String
        duration: DateTime
        albums: [Album]
        genre: Genre
    }

    type Genre {
        id: ID
        name: String
    }

    type Playlist {
        id: ID
        name: String
        musics: [Music]
    }

    type Query {
        artist(id: ID!): Artist
        artists: [Artist]
        album(id: ID!): Album
        albums: [Album]
        music(id: ID!): Music
        musics: [Music]
        playlist(id: ID!): Playlist
        playlists: [Playlist]
        genre(id: ID!): Genre
        genres: [Music]
    }

    input ArtistInput {
        id: ID
        name: String!
    }

    input AlbumInput {
        id: ID
        title: String!
        year: Int!
    }

    input MusicInput {
        id: ID
        name: String!
        url: String!
        duration: DateTime
    }

    input PlaylistInput {
        id: ID
        name: String!
    }

    input GenreInput {
        id: ID
        name: String!
    }
    
    type AlbumsMutation {
        create(album: AlbumInput): Album
        update(id: ID, album: AlbumInput): Boolean
        delete(id: ID): Boolean
    }

    type ArtistsMutation {
        create(artist: ArtistInput): Artist
        update(id: ID, artist: ArtistInput): Boolean
        delete(id: ID): Boolean
    }

    type GenresMutation {
        create(genre: GenreInput): Genre
        update(id: ID, genre: GenreInput): Boolean
        delete(id: ID): Boolean
    }

    type MusicsMutation {
        create(music: MusicInput): Music
        update(id: ID, music: MusicInput): Boolean
        delete(id: ID): Boolean
    }

    type PlaylistsMutation {
        create(playlist: PlaylistInput): Playlist
        update(id: ID, playlist: PlaylistInput): Boolean
        delete(id: ID): Boolean
    }

    type Mutation {
        albums: AlbumsMutation
        artists: ArtistsMutation
        genres: GenresMutation
        musics: MusicsMutation
        playlists: PlaylistsMutation
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})