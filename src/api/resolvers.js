const database = require('../config/database')

module.exports = {
    Query: {
        async artist(_, { id }) {
            return await database('artists').where({ id }).first()
        },
        async artists() {
            return await database('artists')
        },
        async music() {
            return await database('musics').where({ id }).first()
        },
        async musics() {
            return await database('musics')
        },
        async album() {
            return await database('albums').where({ id }).first()
        },
        async albums() {
            return await database('albums')
        },
        async playlist() {
            return await database('playlists').where({ id }).first()
        },
        async playlists() {
            return await database('playlists')
        },
        async genre() {
            return await database('genres').where({ id }).first()
        },
        async genres() {
            return await database('genres')
        }
    },
    Mutation: {
        artist: {
            create: async (_, { artist }) => {
                const [id] = await database('artists')
                    .returning('id')
                    .insert({
                        name: artist.name
                    });

                let artist = await database('artists').where({ id }).first();

                return artist;
            },
            update: async (_, { id, artist }) => {
                database('artists')
                    .where({ id })
                    .update({
                        name: artist.name
                    });
            },
            delete: async (_, { id }) => {
                database('artists')
                    .where({ id })
                    .del();
            }
        },
        async createMusic(_, { input }) {
            const result = await database('musics').insert({
                name: input.name
            })

            const id = result[0]

            return await database('musics').where({ id }).first()
        },
        async createAlbum(_, { input }) {
            const result = await database('albums').insert({
                title: input.title,
                year: input.year
            })

            const id = result[0]

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
        async createPlaylist(_, { input }) {
            const result = await database('playlists').insert({
                name: input.name
            })

            const id = result[0]

            return await database('playlists').where({ id }).first()
        }
    },
    Artist: {
        async albums(parent) {
            return await database('albums').whereIn('id', database.from('albums_artists').where('artist_id', parent.id).select('id'))
        }
    },
    Music: {
        async albums(parent) {
            return await database('albums').whereIn('id', database.from('albums_musics').where('music_id', parent.id).select('id'))
        },
        async genre(parent) {
            return await database('genres').where({ id: parent.genre_id }).first()
        }
    },
    Album: {
        async musics(parent) {
            return await database('musics').whereIn('id', database.from('albums_musics').where('album_id', parent.id).select('id'))
        },
        async artists(parent) {
            return await database('artists').whereIn('id', database.from('albums_artists').where('album_id', parent.id).select('id'))
        }
    },
    Playlist: {
        async musics(parent) {
            return await database('musics').whereIn('id', database.from('playlists_musics').where('playlist_id', parent.id).select('id'))
        }
    }
}
