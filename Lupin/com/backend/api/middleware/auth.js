const jwt = require('jsonwebtoken')

function verifyLogin(req,res,next) {
    const token = req.header('votretoken')
    if(!token){
       return res.send('Vous etes oblige de vous connecter')
    }
    try {
        const tokenDecode = jwt.verify(token,'secretkey')
        req.admin = tokenDecode

        next()
    } catch (error) {
        // return  res.redirect('/login');
        return res.status(401).send('error')
    }
}

module.exports = verifyLogin
  