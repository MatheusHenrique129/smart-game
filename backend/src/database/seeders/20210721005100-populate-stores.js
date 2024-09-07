"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("stores", [
      {
        name: "Shopping União",
        map_location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.748749675694!2d-46.768471548919266!3d-23.541537484617564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff41bd4fbbb3%3A0x883f18a9d028d6!2sShopping%20Uni%C3%A3o%20de%20Osasco!5e0!3m2!1spt-BR!2sbr!4v1615948181162!5m2!1spt-BR!2sbr",
        latitude: -23.541536869874864,
        longitude: -46.766277501908796,
      },
      {
        name: "Shopping Iguatemi",
        map_location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.776353846304!2d-46.85055624891967!3d-23.50456368463604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf0220fcf1dc29%3A0x3b84ef70a4e234e9!2sShopping%20Iguatemi%20Alphaville!5e0!3m2!1spt-BR!2sbr!4v1615948361469!5m2!1spt-BR!2sbr",
        latitude: -23.5045630697207,
        longitude: -46.84836153135712,
      },
      {
        name: "Shopping Tamboré",
        map_location:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7820582252284!2d-46.836544648919684!3d-23.504358284636165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf017b8c1a5da9%3A0x22a277028d33acc!2sShopping%20Tambor%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1615948310892!5m2!1spt-BR!2sbr",
        latitude: -23.50435766971982,
        longitude: -46.83435060190955,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stores", null);
  },
};
