'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Room.init({
    id: {
      type: DataTypes.NUMBER,
      field: 'Id',
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
    modelName: 'User_Room',
  });
  return User_Room;
};