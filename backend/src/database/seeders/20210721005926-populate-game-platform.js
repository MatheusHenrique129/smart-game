"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("game_platform", [
      {
        game_id: 1,
        platform_id: 1,
      },
      {
        game_id: 1,
        platform_id: 4,
      },
      {
        game_id: 1,
        platform_id: 6,
      },
      {
        game_id: 1,
        platform_id: 8,
      },
      {
        game_id: 2,
        platform_id: 4,
      },
      {
        game_id: 3,
        platform_id: 4,
      },
      {
        game_id: 4,
        platform_id: 4,
      },
      {
        game_id: 5,
        platform_id: 5,
      },
      {
        game_id: 5,
        platform_id: 2,
      },
      {
        game_id: 5,
        platform_id: 3,
      },
      {
        game_id: 5,
        platform_id: 1,
      },
      {
        game_id: 6,
        platform_id: 3,
      },
      {
        game_id: 6,
        platform_id: 4,
      },
      {
        game_id: 7,
        platform_id: 1,
      },
      {
        game_id: 7,
        platform_id: 4,
      },
      {
        game_id: 7,
        platform_id: 6,
      },
      {
        game_id: 8,
        platform_id: 5,
      },
      {
        game_id: 8,
        platform_id: 1,
      },
      {
        game_id: 8,
        platform_id: 7,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("game_platform", null);
  },
};
