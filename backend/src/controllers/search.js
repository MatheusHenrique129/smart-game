const { Op } = require("sequelize");
const Game = require("../models/Game");

module.exports = {
  async find(req, res) {
    const keyword = req.query.search;

    try {
      const game = await Game.findAll({
        order: [["created_at", "DESC"]],
        limit: 3,

        where: {
          [Op.or]: [
            {
              name: {
                [Op.like]: `%${keyword}%`,
              },
            },
            {
              description: {
                [Op.like]: `%${keyword}%`,
              },
            },
          ],
        },
      });

      res.send(game);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
