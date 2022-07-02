const router = require('express').Router()
const feedbackForm = require('./FormSchemaModel')

router.post('/',async (req,res)=>{
    
    const tableRes = await  feedbackForm.find({ email: req.body.email}) 
    console.log(req.body)
    console.log(tableRes)
    res.json(tableRes)
})

module.exports = router