const { tables } = require('../tables');

exports.seed = async (knex) => {
    return await knex(tables.albums).del().then(async () => {
        await knex(tables.albums).insert({ title: 'Teste 1', year: 1999 });
        await knex(tables.albums).insert({ title: 'Teste 2', year: 2001 });
    });
};