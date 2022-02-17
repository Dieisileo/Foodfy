const express = require('express')
const routes = express.Router()

const recipes = require("../data")

// const views = __dirname + "/views/"

routes.get('/', (req, res) => res.render("index", {recipes}))
routes.get('/about', (req, res) => res.render("about"))
routes.get('/recipes', (req, res) => res.render("recipes", {recipes}))
routes.get('/recipes/:id', (req, res) => {
  console.log(req)
  
  return res.render("recipe")
})

module.exports = routes;