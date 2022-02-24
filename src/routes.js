const express = require('express')
const routes = express.Router()

const recipes = require("../data")

// const views = __dirname + "/views/"

routes.get('/', (req, res) => res.render("index", {recipes}))
routes.get('/about', (req, res) => res.render("about"))
routes.get('/recipes', (req, res) => res.render("recipes", {recipes}))
routes.get('/recipe/:id', (req, res) => {
  const {id} = req.params

  const recipe = recipes.find(recipe => recipe.id === Number(id))
  
  return res.render("recipe", {recipe})
})

routes.get('/admin/recipes', (req, res) => res.render("admRecipes")) // Mostrar lista de receitas
routes.get('/admin/recipes/create', (req, res) => res.render("create"))

module.exports = routes;