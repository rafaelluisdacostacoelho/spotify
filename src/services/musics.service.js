const database = require('../config/database');

module.exports = {
    single: async ({ id }) => await database('musics').where({ id }).first(),
    list: async () => await database('musics'),
    create: async ({ music }) => {
        const [id] = await database('musics')
            .insert({
                name: music.name,
                url: music.url,
                duration: music.duration
            });

        return await database('musics').where({ id }).first();
    },
    update: async ({ id, music }) => {
        return database('musics').where({ id }).update({
            name: music.name,
            url: music.url,
            duration: music.duration
        });
    },
    delete: async ({ id }) => {
        return database('musics').where({ id }).del();
    }
};