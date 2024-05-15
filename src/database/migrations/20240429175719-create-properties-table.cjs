'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      price: {
        type: Sequelize.DataTypes.DECIMAL
      },
      negotiation: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING  
      },
      description: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT
      },
      address: {
        allowNull: false,
        type: Sequelize.DataTypes.TEXT
      },
      building_area: {
        type: Sequelize.DataTypes.DECIMAL
      },
      total_area: {
        type: Sequelize.DataTypes.DECIMAL
      },
      bedrooms: {
        type: Sequelize.DataTypes.INTEGER
      },
      suites: {
        type: Sequelize.DataTypes.INTEGER
      },
      garage: {
        type: Sequelize.DataTypes.INTEGER
      },
      images_url: {
        type: Sequelize.DataTypes.STRING
      },
      featured: {
        defaultValue: false,
        type: Sequelize.DataTypes.BOOLEAN
      },
      category_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      }
    }) 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('properties')
  }
};
