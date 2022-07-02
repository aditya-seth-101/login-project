const router = require('express').Router()
const feedbackForm = require('./FormSchemaModel')
// const verifyToken = require('./VerifyToken')

router.post('/',async (req,res)=>{

    let formData = new feedbackForm({
        feedFrom:req.body.feedFrom,
        feedTo:req.body.feedTo,
        date:req.body.date,
        feedDesc:req.body.feedDesc,
        adminFeedB:req.body.adminFeedB,
        email:req.body.email

    })
   await formData.save()
    res.json("Feedback Submitted successfully")
})


module.exports = router