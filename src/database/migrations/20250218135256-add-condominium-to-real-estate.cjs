'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('real_estates', 'condominium', {
      type: Sequelize.STRING,
      allowNull: true
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('real_estates', 'condominium')
  }
};
