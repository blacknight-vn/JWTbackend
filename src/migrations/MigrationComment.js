'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        field: 'Id'
      },
      comment: {
        type: Sequelize.TEXT,
        field: 'Comment'
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
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'Post_id'
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
    await queryInterface.dropTable('Comments');
  }
};