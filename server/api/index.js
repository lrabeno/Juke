const router = require("express").Router();

// connect your API routes here!
const albumRouter = require("./album");
router.use("/albums", albumRouter);

module.exports = router;
