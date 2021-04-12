const User = require("../models/userModels");
const Order = require('../models/OrderModels');
const {AddLog}  = require('../logger.js')
const jwt = require('jsonwebtoken');

///ajouter User
const AddOrder = (req,res) =>{
    const id_vendeur = req.body.id_vendeur;
    const id_achteur = req.body.id_achteur;
    const id_product = req.body.id_product;
    const Adresse = req.body.Adresse;
    const Price = req.body.Price;
    

    
  


    const newOrder = new Order({id_vendeur,id_achteur,id_product,Adresse,Price});
    newOrder
    .save()
    .then(() => res.json("Order successfully added"))
    .catch((err) => res.status(400).json("Error :" + err));
}

module.exports={AddOrder}