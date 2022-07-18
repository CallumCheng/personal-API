const express = require("express");

//Creating the express app
const app = express();

//Set up - Making the request, response
app.get("/", (req, res) => {
    res.send("Welcome to hell bitches")
})

module.exports = app;
