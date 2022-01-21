const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => res.sendFile(__dirname + "/views/index.html"))
routes.get('/about', (req, res) => res.sendFile(__dirname + "/views/about.html"))
routes.get('/recipes', (req, res) => res.sendFile(__dirname + "/views/recipes.html"))

module.exports = routes;