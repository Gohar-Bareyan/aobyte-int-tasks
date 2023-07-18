const express = require("express")
const app = express()
const cors = require('cors')

const { PostsController } = require("./Controllers/PostsController")

app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.get("/get-posts", PostsController.getPosts)

app.listen(5005, () => {
    console.log("Started...");
})