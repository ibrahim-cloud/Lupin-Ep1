module.exports = function(req,res,next){
    if(!req.admin.is_vendeur){

        return res.status(403).send('plz cette page pour les vendeur')
    }
    next()
}