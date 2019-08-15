const { genresService } = require("../../services/genres.service");

module.exports = ({
    create: async ({ genre }) => await genresService.create({ genre }),
    update: async ({ id, genre }) => await genresService.update({ id, genre }),
    delete: async ({ id }) => await genresService.delete({ id }),
})
