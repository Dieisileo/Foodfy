const express = require("express")
const nunjucks = require("nunjucks")
const server = express()
const routes = require("./routes")

server.get("/recipes/:index", function (req, res) {
    const recipes = []; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
  
    console.log(recipes[recipeIndex]);
  })


server.set("view engine", "njk")
nunjucks.configure("src/views/", {
    express: server,
    autoescape: false,
    noCache: true
})

server.use(express.urlencoded({ extended: true }))

server.use(express.static("public"))

server.use(routes)

server.listen(3000, () => console.log('rodando'))