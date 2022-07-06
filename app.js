const express = require('express')
const app = express();
const pokemonRoutes = require("./controllers/pokemon")
let cors = require("cors");
app.use(cors())

//this allows me to pass data to the server
const bodyParser = require("body-parser")
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.use("/neighbourhood", pokemonRoutes)

module.exports = app;
