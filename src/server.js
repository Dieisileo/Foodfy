const express = require("express")
const nunjucks = require("nunjucks")
const server = express()
const routes = require("./routes")


server.set("view engine", "njk")
nunjucks.configure("src/views/", {
    express: server,
    autoescape: false,
    noCache: true
})



server.use(express.static("public"))

server.use(routes)

server.listen(3000, () => console.log('rodando'))