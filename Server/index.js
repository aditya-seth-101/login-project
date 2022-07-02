const express = require('express')
const app = express()
const regRoute = require('./RegRoute.js')
const loginRoute = require('./LoginRoute.js')
const feedFormRoute = require('./FeedFormRoute')
const userTableRoute = require('./UserTableRoute')
const editUserRoute = require('./UserEditRoute')
const adminTableRoute = require('./AdminTableRoute')
const adminTableEditRoute = require('./AdminTableEditRoute.js')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

app.use(bodyParser.json())
app.use(cors())
app.use('/register',regRoute)
app.use('/login',loginRoute)
app.use('/feedback-form',feedFormRoute)
app.use('/user-table',userTableRoute)
app.use('/admin-table',adminTableRoute)
app.use('/admin-table-edit',adminTableEditRoute)
app.use('/edit-user',editUserRoute)
app.listen(8083)


mongoose.connect('mongodb://localhost:27017/mydb1',(err)=>{
    if (err) {
        throw err
    }
})