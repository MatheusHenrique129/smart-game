const express = require("express");

const routes = express.Router();

const gameController = require("./controllers/games");
const storeController = require("./controllers/stores");
const platformController = require("./controllers/platforms");
const searchController = require("./controllers/search");

routes.get("/games", gameController.index);
routes.get("/games/:id", gameController.find);
routes.get("/stores", storeController.index);
routes.get("/stores/:id", storeController.find);
routes.get("/platforms", platformController.index);

routes.get("/search", searchController.find);

module.exports = routes;
