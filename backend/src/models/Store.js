const { Model, DataTypes } = require("sequelize");

class Store extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        map_location: DataTypes.TEXT,
        latitude: DataTypes.DOUBLE,
        longitude: DataTypes.DOUBLE,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Game, { through: "game_store" });
  }
}

module.exports = Store;
