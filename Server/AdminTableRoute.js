const router = require('express').Router()
const feedbackForm = require('./FormSchemaModel')

router.post('/',async (req,res)=>{
    const tableRes = await  feedbackForm.find({}) 
    res.json(tableRes)
})

router.delete('/',async (req,res)=>{
    await  feedbackForm.deleteOne({_id:req.body._id})
    let newArr= await  feedbackForm.find({})
    res.json(newArr)
  })

module.exports = router