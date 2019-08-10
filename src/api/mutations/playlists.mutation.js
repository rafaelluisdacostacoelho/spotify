const playlistsService = require("../../services/playlists.service");

module.exports = ({
    create: async ({ playlist }) => await playlistsService.create({ playlist }),
    update: async ({ id, playlist }) => await playlistsService.update({ id, playlist }),
    delete: async ({ id }) => await playlistsService.delete({ id }),
})
