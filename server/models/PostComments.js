module.exports = (sequelize, Sequelize) => {
    const PostsComments = sequelize.define("posts_comments", {
        body: {
            type: Sequelize.STRING
        },
        postId: {
            type: Sequelize.INTEGER,
            references: {
                model: "posts",
                key: "id"
            },
        },
        sender: {
            type: Sequelize.STRING,
        },
        rate: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        }
    })
    return PostsComments
}