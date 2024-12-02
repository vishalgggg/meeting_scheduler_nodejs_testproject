module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
      postLink: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Post;
  };