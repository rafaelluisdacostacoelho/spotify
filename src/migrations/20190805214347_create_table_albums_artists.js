exports.up = function (knex) {
    return knex.schema.createTable('albums_artists', table => {
        table.increments('id').primary()
        table.integer('artist_id').unsigned().index().references('id').inTable('artists')
        table.integer('album_id').unsigned().index().references('id').inTable('albums')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('albums_artists', table => {
        table.dropForeign('artist_id')
        table.dropForeign('album_id')
    })
}
