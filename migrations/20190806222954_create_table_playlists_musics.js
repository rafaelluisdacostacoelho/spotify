exports.up = function (knex) {
    return knex.schema.createTable('playlists_musics', table => {
        table.increments('id').primary()
        table.integer('playlist_id').unsigned().index().references('id').inTable('playlists')
        table.integer('music_id').unsigned().index().references('id').inTable('musics')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('playlists_musics', table => {
        table.dropForeign('playlist_id')
        table.dropForeign('music_id')
    })
}
