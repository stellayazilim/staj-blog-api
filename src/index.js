const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/index.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/blog", routes.blogRoutes)
app.get("/", (req, res)=>{
    res.send("hello world" )
})

app.listen(3000, ()=> console.log("server start"))

