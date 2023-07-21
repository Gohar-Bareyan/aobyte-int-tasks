module.exports = (sequelize, Sequelize) => {
  return sequelize.define("posts", {
    userId: {
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING
    },
    body: {
      type: Sequelize.STRING
    },
    averageRate: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
  })
}