exports.up = function (knex) {
    return knex.schema.alterTable('musics', table => {
        table.integer('genre_id').unsigned().index().references('id').inTable('genres')
    })
}

exports.down = function (knex) {
    return knex.schema.alterTable('musics', table => {
        table.dropForeign('genre_id')
        table.dropColumn('genre_id')
    })
}
