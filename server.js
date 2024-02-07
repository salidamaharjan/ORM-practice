const {Sequelize, Model, DataTypes} = require("sequelize");
const express = require('express');
require('dotenv').config();

const { DB_PASSWORD, DB_USER, DB_DATABASE } = process.env;

const sequelize = new Sequelize( DB_DATABASE, DB_USER, DB_PASSWORD, {
    host: '127.0.0.1',
    dialect: 'mysql'
});
const app = express();
const PORT = process.env || 3001;

class User extends Model {}

run();
async function run() {
  await sequelize.sync({ force: false });
  console.log(`Connected`);
  app.listen(console.log(PORT, () => `Listening at http://localhost:${PORT}`));
}
