exports.up = function (knex) {
    return knex.schema.createTable('albums', table => {
        table.increments('id').primary()
        table.string('title', 50)
        table.integer('year')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('albums')
}
