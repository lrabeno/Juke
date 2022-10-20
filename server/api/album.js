const router = require("express").Router();
const { Album, Artist, Song } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: Artist,
    });
    res.send(albums);
  } catch (error) {
    next(error);
  }
});

router.get("/:albumId", async (req, res, next) => {
  try {
    const singleAlbum = await Album.findOne({
      where: {
        id: req.params.albumId,
      },
      include: [Artist, Song],
    });
    res.send(singleAlbum);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
