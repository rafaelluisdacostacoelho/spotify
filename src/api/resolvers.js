const db = require('../config/database')

module.exports = {
    Query: {
        async artist(_, { id }) {
            return await db('artists').where({ id }).first()
        },
        async artists() {
            return await db('artists')
        },
        async music() {
            return await db('musics').where({ id }).first()
        },
        async musics() {
            return await db('musics')
        },
        async album() {
            return await db('albums').where({ id }).first()
        },
        async albums() {
            return await db('albums')
        }
    },
    Mutation: {
        async createArtist(_, { input }) {
            const result = await db('artists').insert({
                name: input.name
            })

            const id = result[0]

            return await db('artists').where({ id }).first()
        },
        async createMusic(_, { input }) {
            const result = await db('musics').insert({
                name: input.name,
                duration: input.duration
            })

            const id = result[0]

            return await db('musics').where({ id }).first()
        },
        async createAlbum(_, { input }) {
            const result = await db('albums').insert({
                title: input.title,
                year: input.year
            })

            const id = result[0]

            return await db('albums').where({ id }).first()
        }
    }
}