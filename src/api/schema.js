const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
    type Artist {
        id: ID,
        name: String!,
        albums: [Album]
    }

    type Album {
        id: ID,
        title: String!,
        year: Int!,
        artists: [Artist],
        musics: [Music]
    }

    type Music {
        id: ID,
        name: String!,
        albums: [Album]
    }

    type Query {
        artist(id: ID!): Artist
        artists: [Artist],
        album(id: ID!): Album,
        albums: [Album],
        music(id: ID!): Music,
        musics: [Music]
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
    }

    type Mutation {
        createArtist(input: ArtistInput): Artist,
        createAlbum(input: AlbumInput): Album,
        createMusic(input: MusicInput): Music
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})