const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Post = require('./post')(sequelize, DataTypes);
db.Comment = require('./comment')(sequelize, DataTypes);

// Define many-to-many relationship
db.Post.belongsToMany(db.Comment, { through: 'PostComments', foreignKey: 'postId' });
db.Comment.belongsToMany(db.Post, { through: 'PostComments', foreignKey: 'commentId' });

module.exports = db;