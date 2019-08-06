exports.up = function (knex) {
    return knex.schema.createTable('albums_artists', table => {
        table.uuid('id').primary()
        table.uuid('artist_id').references('artists.id')
        table.uuid('album_id').references('albums.id')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('albums_artists', table => {
        table.dropForeign('artist_id')
        table.dropForeign('album_id')
    })
}
