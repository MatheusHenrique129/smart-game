const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Game = require("../models/Game");
const Store = require("../models/Store");
const Platform = require("../models/Platform");

const connection = new Sequelize(dbConfig);

//inicializa os models
Game.init(connection);
Store.init(connection);
Platform.init(connection);

//inicializa os relacionamentos
Game.associate(connection.models);
Store.associate(connection.models);
Platform.associate(connection.models);
