const User = require("../models/userModels");
const Product = require('../models/productModels');
const {AddLog}  = require('../logger.js')
const jwt = require('jsonwebtoken');

//get All Product

const getAllProduct = async (req,res)=>{
    const Products= await  Product.find({sold:false })
        .then((Products) => {  
           res.json(Products)
          })
          .catch((err) => res.status(400).json("Error :" + err));
 } 

 const getSingleProduct = async (req,res)=>{
     const product = await Product.findById(req.params.id)
     .then((product) => {  
         console.log(req.params.id)
        res.json(product)
       })
       .catch((err) => res.status(400).json("Error :" + err));
 }

 const PutProduct = async (req,res)=>{
    const product = await Product.findById(req.params.id)
    .then((products) => { 
        products.sold = true
        products
        .save()
        .then(() => res.json(products))

      
      })
      .catch((err) => res.status(400).json("Error :" + err));
}





module.exports={getAllProduct,getSingleProduct ,PutProduct}