const { Model, DataTypes } = require("sequelize");

class Game extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        rebate: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Store, { through: "game_store" });
    this.belongsToMany(models.Platform, { through: "game_platform" });
  }
}

module.exports = Game;
