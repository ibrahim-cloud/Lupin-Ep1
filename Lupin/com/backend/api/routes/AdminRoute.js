const express = require('express')
const router = express.Router() 

const Gadmin = require('../middleware/Gadmin')
const admin = require('../middleware/admin')
const auth = require('../middleware/auth')

const AdminController = require('../controller/AdminController')


router.post('/AddAdmin',[auth,Gadmin],AdminController.AddAdmin)

router.post('/login',AdminController.SuperAdminLogin)

router.get('/user',AdminController.getuser)
router.get('/order',AdminController.GetOrder)

router.patch('/Validorder/:id',[auth,admin],AdminController.ValidOrder)
router.patch('/putR/:id',AdminController.PutRevenu)

router.put("/valid/:id" ,[auth,admin],AdminController.SuperAdminValid) ;




module.exports = router