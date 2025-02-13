'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      real_estate_id: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER,
        references: { model: 'real_estates', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      scheduled_date: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE
      },
      status: {
        allowNull: false,
        type: Sequelize.DataTypes.ENUM('pendente', 'confirmado', 'cancelado'),
        defaultValue: 'pendente'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.DataTypes.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('schedules')
  }
};
