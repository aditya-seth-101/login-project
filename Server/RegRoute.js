const router = require('express').Router()
const UserReg = require('./UseSchemaModel.js')
router.post('/', async (req,res)=>{
    let user = new UserReg({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
  const savedUser = await user.save()
        let h ={message:"User is registered sucessfully"}
        res.json(h)
    


   
})

module.exports = router