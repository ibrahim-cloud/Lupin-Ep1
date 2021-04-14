const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('./userModels')
const ProductSchema = mongoose.Schema({
    image: {
        type: String
    },
    type:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    prix:{
        type:Number,
        require:true
    },
    id_vendeur:{
        type : mongoose.Schema.Types.ObjectId,
        ref:User
    },
    sold:{
       type:Boolean,
       require:true,
       default:false
    }

})


const Product = mongoose.model('Product' , ProductSchema)
module.exports = Product