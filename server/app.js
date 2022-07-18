const express = require("express");

const data = require('./data');

//Creating the express app
const app = express();


//Set up - Making the request, response
app.get("/", (req, res) => {
    res.send("Welcome to hell bitches")
})

app.get("/people", (req, res) => {
    let people = data;

    res.json({
        people: people.map(p => p["name"])
    })

})

module.exports = app;
