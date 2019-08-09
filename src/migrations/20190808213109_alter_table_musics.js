exports.up = function (knex) {
    return knex.schema.alterTable('musics', table => {
        table.time('duration')
        table.string('url')
    })
}

exports.down = function (knex) {
    return knex.schema.alterTable('musics', table => {
        table.dropColumn('url')
        table.dropColumn('duration')
    })
}
