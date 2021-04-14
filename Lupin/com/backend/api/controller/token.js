// const jwt = require('jsonwebtoken')

// function verifyLogin(req,res,next) {
//     const token = req.header('votretoken')
//     if(!token){
//        return res.send('Vous etes oblige de vous connecter')
//     }
//     try {
//         const tokenDecode = jwt.verify(token,'secretkey')
//         req.admin = tokenDecode

//         next()
//     } catch (error) {
//         // return  res.redirect('/login');
//         return res.status(401).send('error')
//     }
// }

// module.exports = verifyLogin
  
const jwt = require("jsonwebtoken");
exports.verifySellerToken =  (req, res, next) => {
  const token = req.header("votretoken");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, 'secretkey');
    req.seller = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

exports.verifyAdminToken = (req, res, next) => {
  const token = req.header("votretoken");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, 'TokenAdmin');
    req.admin = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};

exports.verifySuperAdminToken = (req, res, next) => {
  const token = req.header("votretoken");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, 'SuperAdminToken');
    req.superAdmin = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
  next()
};

exports.verifyBuyerToken =  (req, res, next) => {
  const token = req.header("votretoken");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, 'VendeurToken');
    req.buyer = verified;
    next();
  } catch (error) {
    res.status(400).send("Invalid Token");
  }
};