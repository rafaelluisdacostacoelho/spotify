const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const artistAttribs = `
    id: ID,
    name: String!
`

const albumAttribs = `
    id: ID,
    name: String!,
    year: Int!
`

const musicAttribs = `
    id: ID,
    name: String!,
    duration: Int!
`

const typeDefs = `
    type Artist {
        ${artistAttribs}
    }

    type Album {
        ${albumAttribs}
    }

    type Music {
        ${musicAttribs}
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
        ${artistAttribs}
    }

    input AlbumInput {
        ${albumAttribs}
    }

    input MusicInput {
        ${musicAttribs}
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