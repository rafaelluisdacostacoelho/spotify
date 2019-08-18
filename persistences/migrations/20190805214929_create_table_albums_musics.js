exports.up = function (knex) {
    return knex.schema.createTable('albums_musics', table => {
        table.increments('id').primary()
        table.integer('music_id').unsigned().index().references('id').inTable('musics')
        table.integer('album_id').unsigned().index().references('id').inTable('albums')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('albums_musics', table => {
        table.dropForeign('music_id')
        table.dropForeign('album_id')
    })
}
