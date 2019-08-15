const { artistsService } = require("../../services/artists.service");

module.exports = ({
    create: async ({ artist }) => await artistsService.create({ artist }),
    update: async ({ id, artist }) => await artistsService.update({ id, artist }),
    delete: async ({ id }) => await artistsService.delete({ id }),
})
