const musicsService = require("../../services/musics.service");

module.exports = ({
    create: async ({ music }) => await musicsService.create({ music }),
    update: async ({ id, music }) => await musicsService.update({ id, music }),
    delete: async ({ id }) => await musicsService.delete({ id }),
})
