const express = require('express')
const router = express.Router() 

const ProduitController = require('../controller/ProduitController');
const OrderController = require('../controller/orderController');

const auth = require('../middleware/auth')




router.get("/All",ProduitController.getAllProduct)
router.get("/find/:id",ProduitController.getSingleProduct)
router.post("/addOrder",OrderController.AddOrder)
router.post("/PutProduct/:id",ProduitController.PutProduct)








module.exports = router