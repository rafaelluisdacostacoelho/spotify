const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const artistAttribs = `
    id: ID,
    name: String!
`

const typeDefs = `
    type Artist {
        ${artistAttribs}
    }

    type Query {
        getArtist(id: ID!): Artist
        getArtists: [Artist]
    }

    input ArtistInput {
        ${artistAttribs}
    }

    type Mutation {
        createArtist(input: ArtistInput): Artist
    }
`

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers
})