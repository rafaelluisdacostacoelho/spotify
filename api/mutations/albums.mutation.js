const { albumsService } = require("../../services/albums.service");

module.exports = ({
    create: async ({ album }) => await albumsService.create({ album }),
    update: async ({ id, album }) => await albumsService.update({ id, album }),
    delete: async ({ id }) => await albumsService.delete({ id }),
})
