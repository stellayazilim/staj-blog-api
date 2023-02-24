const express = require('express')
const router = express.Router()
const prisma = require('../database')




router.get("/", async (req, res)=>{
 const posts = await prisma.post.findMany({})
 res.json(posts)
})

router.get("/:id", async (req, res) =>{
    const id = req.params.id
   const post = await prisma.post.findFirst({
    where : {
        id: parseInt(id)
    }
   })
    res.json(post)
})

router.post("/", async (req,res)=> {

   const {
    author,...rest
   }=req.body

   console.log(rest)
    const post = await prisma.post.create({
        data:{
            author:{
                connect:{
                    id:author
                }
            },
            ...rest
        }
    })
 res.json(post)

})

module.exports=router