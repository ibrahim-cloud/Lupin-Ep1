const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const OrderSchema = mongoose.Schema({
    id_vendeur: {
        type: String, 
        required : true  
    },
    
    id_achteur : {
        type : String,
        require : true
    },
    id_product : {
        type : String,
        require : true
    },
    Adresse : {
        type : String,
        require : true
    },
    valid_Order:{
        type:Boolean,
        require:true,
        default:false
    },
    Price:{
        type:Number,
        require:true,
       
    }
   
})


const Order = mongoose.model('Order' , OrderSchema)
module.exports = Order