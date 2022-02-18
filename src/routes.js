const express = require('express')
const routes = express.Router()

const recipes = require("../data")

// const views = __dirname + "/views/"

routes.get('/', (req, res) => res.render("index", {recipes}))
routes.get('/about', (req, res) => res.render("about"))
routes.get('/recipes', (req, res) => res.render("recipes", {recipes}))
routes.get('/recipe/:id', (req, res) => {
  const {id} = req.params

  const result = recipes.find(r => r.id === Number(id))
  console.log(result)
  
  return res.render("recipe")
})

module.exports = routes;