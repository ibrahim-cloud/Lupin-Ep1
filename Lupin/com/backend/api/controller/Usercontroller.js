const User = require("../models/userModels");
const Product = require('../models/productModels');
const {AddLog}  = require('../logger.js')
const jwt = require('jsonwebtoken');



///ajouter User
const AddUser = (req,res) =>{
    const full_name = req.body.full_name;
    const phone = req.body.phone;
    const age = req.body.age;
    const password = req.body.password;
    const email = req.body.email;
    const is_vendeur = req.body.is_vendeur;


    const newUser = new User({full_name,phone,age,password,email,is_vendeur});
    newUser
    .save()
    .then(() => res.json("User successfully added"))
    .catch((err) => res.status(400).json("Error :" + err));
}
///// Login User
const UserLogin = async (req,res)=>{
    const{phone,password} = req.body
   const Users= await  User.findOne({phone, password}, (err,  User) => {
       if (User.is_vendeur){
         
             if(err || ! User || ! User. is_valid ){
                 console.log('error')
                return res.status(400).json({
                    error : " User not found with this email, Please Singup" + err
                })

             } else{
                token = jwt.sign({ _id: User._id    ,   is_vendeur : User.is_vendeur   }, 'secretkey')
                res.send({  User:  User ,token:token})  
                AddLog("Login  User", "info", "Login  User") 

             }


       }
       else{
        token = jwt.sign({ _id: User._id , is_vendeur:User.is_vendeur   }, 'secretkey')
        res.send({  User:  User ,token:token})  
        AddLog("Login  User", "info", "Login  User") 
       }

          });
 } 
 ///updatePassword
 const updatePassword = async (req,res)=>{
    const password = req.body.password;
    const Users= await  User.findById (req.params.id)

        .then((user) => {  
            user.first_login = true;
            user.password = password;
            user
                .save()
                .then(() => res.json("successfully updated"))
       
  
          });
        

 }

 ////Post Product////
 const AddProduct = async (req,res) =>{
    const token = req.header('votretoken')
    const codeToken = jwt.verify(token, 'secretkey')

    const image = req.body.image ;
    const type = req.body.type;
    const description = req.body.description;
    const prix = req.body.prix;
    const id_vendeur = codeToken._id;
    const user = await User.findById( codeToken._id )





    

    
 
        
 if (user.type_account === "starter"){

    if(user.Number_Posts >= 2){
        res.json('cannot add onther post')

    }else{
          const newProduct = await new Product({image,type,description,prix,id_vendeur});
    newProduct.save()  
  const Users= await  User.findById (codeToken._id)
    .then((user)=>{
        user. Number_Posts++ ;
        user
        .save()
        .then(() => res.json("successfully updated"))


    })
    .catch((err) => res.status(400).json("Error :" + err));




}

    }
    





    if(user.type_account==="pro"){
        console.log(user.type_account )
        if(user.Number_Posts >= 5){
            res.json('cannot add onther post')
    
        }else{
              const newProduct = await new Product({image,type,description,prix,id_vendeur});
        newProduct.save()  
      const Users= await  User.findById (codeToken._id)
        .then((user)=>{
            user. Number_Posts++ ;
            user
            .save()
            .then(() => res.json("successfully updated"))
    
    
        })
        .catch((err) => res.status(400).json("Error :" + err));
    
    
    
    
    }
}
////Account Expert

if(user.type_account==="expert"){
   
          const newProduct = await new Product({image,type,description,prix,id_vendeur});
    newProduct.save()  
  const Users= await  User.findById (codeToken._id)
    .then((user)=>{
        user. Number_Posts++ ;
        user
        .save()
        .then(() => res.json("successfully updated"))


    })
    .catch((err) => res.status(400).json("Error :" + err));


}  
    else{
        console.log('have problem')

    }

 }
   ///Get user By id 
 const getUserById = async (req,res)=>{
    const Users= await  User.findById (req.params.id)
        .then((user) => {  
           res.json(user)
          })
          .catch((err) => res.status(400).json("Error :" + err));
 }  
module.exports={AddUser,UserLogin,updatePassword,AddProduct ,getUserById}