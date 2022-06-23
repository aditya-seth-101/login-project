const express = require('express')
const app = express()
const regRoute = require('./RegRoute.js')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())
app.use('/register',regRoute)
app.listen(8083)


mongoose.connect('mongodb://localhost:27017/mydb1',(err)=>{
    if (err) {
        throw err
    }
})