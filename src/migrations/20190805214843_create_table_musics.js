exports.up = function (knex) {
    return knex.schema.createTable('musics', table => {
        table.uuid('id').primary()
        table.string('name')
        table.time('duration')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('musics')
}
