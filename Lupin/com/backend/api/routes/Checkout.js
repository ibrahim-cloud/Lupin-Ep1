  
const express = require('express');
const router = express.Router();
const checkoutController = require('../controller/checkout');




router.post('/checkout',  checkoutController.checkout);






module.exports = router;