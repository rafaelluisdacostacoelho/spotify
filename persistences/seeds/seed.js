const { tables } = require('../tables');

exports.seed = async (schema) => {
    return await schema(tables.albums).del().then(async () => {
        await schema(tables.albums).insert({ title: 'Teste 1', year: 1999 });
        await schema(tables.albums).insert({ title: 'Teste 2', year: 2001 });
    });
};