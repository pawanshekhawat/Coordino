const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}

main().then(() => {
    console.log("connected to MongoDB")
}).catch((err) => {
    console.log(err);
});

app.get("/", (req, res) => {
    res.send("app is working");
});

app.listen(5000, () => {
    console.log("server is listening to port 5000");
});