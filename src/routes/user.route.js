const express = require('express')
const router = express.Router()
const prisma = require('../database')


router.post("/", async (req,res)=> {
   const user = await prisma.user.create({data:req.body})
    res.json(user)
})

module.exports=router