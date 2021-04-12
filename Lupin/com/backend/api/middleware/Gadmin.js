module.exports = function (req,res,next){
    console.log(req.admin)

    if(!req.admin.is_super_admin){
        return res.status(403).send('plz cette page pour superadmin')
    }
    next();
}