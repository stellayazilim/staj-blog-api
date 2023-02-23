const express = require('express')
const routes = require("./routes")
const app = express()

app.get("/", (req, res)=>{
    res.send("hello world" )
})

app.listen(3000, ()=> console.log("server start"))