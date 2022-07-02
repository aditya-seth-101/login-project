const router = require('express').Router()
const UserReg = require('./UserSchemaModel.js')    
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
router.post('/', async (req,res)=>{
    const user = await  UserReg.findOne({ email: req.body.email})   
   if (!user){
   return res.json('Email does not exist')
   }
   const vaildPass = await bcrypt.compare(req.body.password,user.password)
   if (!vaildPass) return res.json('Password is not correct')
    
    // res.json('Logged in')
    const token = JWT.sign({_id:user._id},process.env.TOKEN)
    res.header('auth-token',token).send({message:"Login Successful",user:user})
})

module.exports = router