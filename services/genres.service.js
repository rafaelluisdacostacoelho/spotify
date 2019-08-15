const { schema } = require('../settings/database');

module.exports.genresService = {
    single: async ({ id }) => await schema('genres').where({ id }).first(),

    list: async () => await schema('genres'),

    create: async ({ genre }) => {
        const request = {
            name: genre.name
        };

        const [id] = await schema('genres').insert(request);

        return await schema('genres').where({ id }).first();
    },

    update: async ({ id, genre }) => {
        const request = {
            name: genre.name
        };

        return await schema('genres').where({ id }).update(request);
    },

    delete: async ({ id }) => await schema('genres').where({ id }).del()
};