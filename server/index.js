const express = require("express")
const app = express()
const cors = require('cors')
const { router } = require("./routes");

app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.use("/", router);

app.listen(5005, () => {
    console.log("Started...");
})