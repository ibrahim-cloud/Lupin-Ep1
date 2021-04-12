const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const adminSchema = mongoose.Schema({
    full_name: {
        type: String, 
        required : true  
    },
    
    password : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true,
        unique: true 
    },
    is_admin : {
        type :Boolean,
        default: true
    },
    is_super_admin : {
        type :Boolean,
        default: false
    }
})


const Admin = mongoose.model('Admin' , adminSchema)
module.exports = Admin