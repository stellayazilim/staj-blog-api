const express = require('express')
const router = express.Router()


const blogs= []


router.get("/", (req, res)=>{
    res.json(blogs)

})

router.get("/:id",(req, res) =>{
    const id = req.params.id
    console.log(id)
    res.json(blogs[id])
})

router.post("/", (req,res)=> {
    const blog = {
        id:blogs.length,
        ...req.body
    }
    blogs.push(blog)
    res.json(blog)
})

module.exports=router