'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Message.init({
    id: {
      type: DataTypes.NUMBER,
      field: 'Id',
    },
    message: {
      type: DataTypes.TEXT,
      field: 'Message'
    },
    img: {
      type: DataTypes.STRING,
      field: 'Img',
    },
    userId: {
      type: DataTypes.NUMBER,
      field: 'User_id'
    },
    roomId: {
      type: DataTypes.NUMBER,
      field: 'Room_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'Created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'Updated_at'
    }
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};