const Sequelize = require("sequelize");
const db = require("./db");
const { STRING } = Sequelize;

const Song = db.define("song", {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
  audioUrl: {
    type: STRING,
    allowNull: false,
  },
  genre: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Song;
