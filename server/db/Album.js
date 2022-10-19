const Sequelize = require("sequelize");
const db = require("./db");
const { STRING } = Sequelize;

// require each of your models here...
const Album = db.define("album", {
  // Add your Sequelize fields here
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
  artworkUrl: {
    type: STRING,
    defaultValue: "default-album.jpg",
    allowNull: false,
  },
});

module.exports = Album;
