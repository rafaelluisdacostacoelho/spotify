exports.up = function (knex) {
  return knex.schema.createTable('artists', table => {
    table.uuid('id').primary()
    table.string('name', 50).notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('artists')
}
