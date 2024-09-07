"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("platforms", [
      {
        name: "PC",
      },
      {
        name: "PS2",
      },
      {
        name: "PS3",
      },
      {
        name: "PS4",
      },
      {
        name: "Xbox 360",
      },
      {
        name: "Xbox One",
      },
      {
        name: "WiiU",
      },
      {
        name: "Switch",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("platforms", null);
  },
};
