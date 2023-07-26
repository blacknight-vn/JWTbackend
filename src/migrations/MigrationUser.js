'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'Id'
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'Username'
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'Email'
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'Password'
      },
      img: {
        type: Sequelize.STRING,
        field: 'Img'
      },
      introduction: {
        type: Sequelize.TEXT,
        field: 'Introduction'
      },
      refreshToken: {
        type: Sequelize.TEXT,
        field: 'Refresh_Token'
      },
      role: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'Role'
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
    await queryInterface.dropTable('Users');
  }
};