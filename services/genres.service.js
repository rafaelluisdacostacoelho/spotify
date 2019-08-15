const { schema, tables } = require('../settings/database');

module.exports.genresService = {
    single: async ({ id }) => await schema(tables.genres).where({ id }).first(),

    list: async () => await schema(tables.genres),

    create: async ({ genre }) => {
        const request = {
            name: genre.name
        };

        const [id] = await schema(tables.genres).insert(request);

        return await schema(tables.genres).where({ id }).first();
    },

    update: async ({ id, genre }) => {
        const request = {
            name: genre.name
        };

        return await schema(tables.genres).where({ id }).update(request);
    },

    delete: async ({ id }) => await schema(tables.genres).where({ id }).del()
};