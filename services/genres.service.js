const knex = require('../persistences/knex');
const tables = require('../persistences/tables');

module.exports = {
    single: async ({ id }) => await knex(tables.genres).where({ id }).first(),

    list: async () => await knex(tables.genres),

    create: async ({ genre }) => {
        const request = {
            name: genre.name
        };

        const [id] = await knex(tables.genres).insert(request);

        return await knex(tables.genres).where({ id }).first();
    },

    update: async ({ id, genre }) => {
        const request = {
            name: genre.name
        };

        return await knex(tables.genres).where({ id }).update(request);
    },

    delete: async ({ id }) => await knex(tables.genres).where({ id }).del()
};