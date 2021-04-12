const Admin = require("../models/AdminModels")
const User = require("../models/userModels");
const Product = require('../models/productModels');

const jwt = require('jsonwebtoken');


//get for each user number postes
const getNumberPost = async (req,res) =>{
 const Productuser =   await Product.find({id_vendeur:req.params.id})
     if (Productuser){
        res.json(Productuser)
     } 
     
  }
  

  module.exports={getNumberPost}