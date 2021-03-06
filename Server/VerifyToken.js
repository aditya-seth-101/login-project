const JWT = require('jsonwebtoken')

module.exports= function (req,res,next) {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Access denied')
    try {
        const verified =JWT.verify(token,process.env.TOKEN)
        req.user = verified
        next()
} catch (error) {
        res.status(400).send('Invalid token')
    }
}