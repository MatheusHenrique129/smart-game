const Store = require("../models/Store");

module.exports = {
  async index(req, res) {
    try {
      const store = await Store.findAll({
        attributes: ["id", "name", "map_location", "latitude", "longitude"],
      });

      res.send(store);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async find(req, res) {
    const storeId = req.params.id;

    try {
      const store = await Store.findByPk(storeId, {
        attributes: ["id", "name", "map_location", "latitude", "longitude"],
      });

      res.send(store);
    } catch (error) {
      res.status(500).send(error);
    }
  },
};
