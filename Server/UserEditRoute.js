const router = require('express').Router()
const feedbackForm = require('./FormSchemaModel')

router.post('/:id',async (req,res)=>{
    
    const editRes = await  feedbackForm.findById(req.params.id) 
    res.json(editRes)
})
router.put('/:id',async (req,res)=>{
    
    const findRes = await  feedbackForm.findById(req.params.id) 
   await findRes.updateOne(req.body) 
    res.json(findRes)
 
})

module.exports = router