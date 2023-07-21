const config = require("../config/config.json");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: config.development.dialect
});

const Posts = require("./Posts")(sequelize, Sequelize);
const PostComments = require("./PostComments")(sequelize, Sequelize);

Posts.hasMany(PostComments);
PostComments.belongsTo(Posts);

module.exports = {
  Posts,
  PostComments
};
