const db = require('../config/database')

module.exports = {
    Query: {
        async getArtist(_, { id }) {
            return await db('artists').where({ id }).first()
        },
        async getArtists() {
            return await db('artists')
        }
    },
    Mutation: {
        async createArtist(_, { input }) {
            const result = await db('artists').insert({
                name: input.name
            })

            const id = result[0]

            return await db('artists').where({ id }).first()
        }
    }
}