const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

routes.get('/', (req, res) => res.render("index"))
routes.get('/about', (req, res) => res.render(views + "about"))
routes.get('/recipes', (req, res) => res.render(views + "recipes"))

module.exports = routes;