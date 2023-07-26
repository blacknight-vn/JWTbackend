'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    id: {
      type: DataTypes.NUMBER,
      field: 'Id',
    },
    comment: {
      type: DataTypes.TEXT,
      field: 'Comment'
    },
    img: {
      type: DataTypes.STRING,
      field: 'Img',
    },
    userId: {
      type: DataTypes.NUMBER,
      field: 'User_id'
    },
    postId: {
      type: DataTypes.NUMBER,
      field: 'Post_id'
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
    modelName: 'Comment',
  });
  return Comment;
};