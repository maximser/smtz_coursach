const path = require('path');

const Sequelize = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.resolve(__dirname, "sqlite.db")
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.property = require("./property.model.js")(sequelize, Sequelize);

module.exports = db;
