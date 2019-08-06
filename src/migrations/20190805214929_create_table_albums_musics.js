exports.up = function (knex) {
    return knex.schema.createTable('albums_musics', table => {
        table.uuid('id').primary()
        table.uuid('music_id').references('musics.id')
        table.uuid('album_id').references('albums.id')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('albums_musics', table => {
        table.dropForeign('music_id')
        table.dropForeign('album_id')
    })
}
