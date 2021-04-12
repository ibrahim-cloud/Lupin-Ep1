const Admin = require("../models/AdminModels")
const User = require("../models/userModels");
var nodemailer = require('nodemailer');

const {AddLog}  = require('../logger.js')
const jwt = require('jsonwebtoken');
const Order = require("../models/OrderModels");


///Add first Admin
const AddAdmin = (req,res) =>{
      
      
    const full_name = req.body.full_name;
     const phone = req.body.phone;
     const password = req.body.password;
     const email = req.body.email;
 
     const newAdmin = new Admin({full_name,phone,password,email});
     newAdmin
     .save()
     .then(() => res.json("Admin successfully added"))
     .then(()=>     AddLog("Add Admin", "info", "Add Admin")) 
     
     .catch((err) => res.status(400).json("Error :" + err));
}
/////Login Admin
const SuperAdminLogin = async (req,res)=>{
    const{phone,password} = req.body
  const admin =  await Admin.findOne({phone, password})
        if (admin) {
            var token = null
            if (admin.is_super_admin) {
                token = jwt.sign({ _id: admin._id   , is_super_admin: admin.is_super_admin }, 'secretkey')
                console.log('super admin');
                console.log(admin.is_super_admin)
            }
            else {
                token = jwt.sign({ _id: admin._id    , is_admin: admin.is_admin }, 'secretkey' )
                console.log('admin');
            }
            res.send({ admin: admin, token: token })
        
    }
 else {
    res.send('go to signup page')
}
         
          }

///////Get User
const getuser = async (req,res) =>{


 
    User.find({is_vendeur:true , is_valid:false}).exec((err, user) => {
      if(err){
          return res.status(500).json({
              error: err
          })
      }
  
      res.json(user)
  })
  }
  //// Validition Participant
 const SuperAdminValid = (req,res) =>{
       
    User.findById(req.params.id)

   


      .then((user) => {  
        user. is_valid = req.body. is_valid;
        user
            .save()
            .then(() => res.json("is_valid successfully updated"))
            .then(()=> AddLog("user valid", "info", "user Valid") )
            
            
  
   
    var transporter =   nodemailer.createTransport({
      service: 'gmail',
    port: 535,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'himi66447@gmail.com', // generated ethereal user
        pass: ''  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
    });
    
    var mailOptions =  {
      from: 'himi66447@gmail.com',
      to: user.email,
      subject: 'Lupin',
      text: 'Votre compte a été activé avec succès'
    };
    
      transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  })
}  


//Get Order
const GetOrder = (req,res) =>{
Order.find({valid_Order : false}).exec((err, user) => {
  if(err){
      return res.status(500).json({
          error: err
      })
  }

  res.json(user)
})
 
}


///Valid Order
const ValidOrder = (req,res) =>{
    Order.findById(req.params.id)

  .then((order)=>{
    order.valid_Order = true
    order
    
    .save()
    .then(() => res.json("Order successfully updated"))

  })
}
//put Revune for Buyer
const PutRevenu = (req,res) =>{
  User.findById(req.params.id)

.then((User)=>{
  User.revenu = User.revenu + req.body.revenu
  User
    .save()
    .then(() => res.json("User successfully updated"  ))

  })

}


module.exports={SuperAdminLogin,AddAdmin,getuser,SuperAdminValid,GetOrder,ValidOrder,PutRevenu}