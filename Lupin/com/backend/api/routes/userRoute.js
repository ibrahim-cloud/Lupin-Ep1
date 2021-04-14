const express = require('express')
const router = express.Router() 

const signupController = require('../controller/Usercontroller');
const dashboardMini = require('../controller/dashboardmini');
const vendeur = require('../middleware/vendeur');
const auth = require('../middleware/auth')




router.route("/signup").post(signupController.AddUser) ;
router.route("/login").post(signupController.UserLogin) ;
router.route("/valid/:id").put(signupController.updatePassword) ;
router.post("/AddProduct",signupController.AddProduct) ;
router.get("/numberProduit/:id",dashboardMini.getNumberPost)
router.get("/:id",signupController.getUserById)





module.exports = router