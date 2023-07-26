'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'Id'
      },
      status: {
        type: Sequelize.TEXT,
        field: 'Status'
      },
      img: {
        type: Sequelize.STRING,
        field: 'Img'
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'User_id'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'Created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'Updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};