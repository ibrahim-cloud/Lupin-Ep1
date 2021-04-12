const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    full_name: {
        type: String, 
        required : true  
    },
    age: {
        type: Number, 
        required : true  
    },
    phone: {
        type: String, 
        required : true  
    },
    is_vendeur: {
        type: Boolean, 
        required : true ,
        default:false
    },
    is_valid: {
        type: Boolean, 
        required : true ,
        default:false
    },
   online: {
        type: Boolean, 
        required : true  ,
        default:false
    },
    password: {
        type: String, 
        required : true  
    },
    email: {
        type: String, 
        required : true  
    },
    first_login: {
        type: Boolean, 
        required : true  ,
        default:false
    },
    Number_Posts:{
        type:Number,
        default:0
    },
    type_account:{
        type:String,
        required:true,
        default:"starter"
    },
    revenu:{
        type:Number,
        required:true,
        default:0
    }
 
});

const User = mongoose.model(" User", UserSchema);
module.exports = User;