const Sequelize = require("sequelize");
const db = require("./db");
const { STRING } = Sequelize;

const Artist = db.define("artist", {
  // Add your Sequelize fields here
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: false,
    },
  },
});

module.exports = Artist;
