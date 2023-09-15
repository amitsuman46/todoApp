const jwt = require('jsonwebtoken');

exports.isAuth = (req,res, next) => {
    const token = req.get("Authorization").split(" ")[1];
    let decodedToken;
    try{
        decodedToken = jwt.verify(token,"pkmkb");
        if(!decodedToken){
            return res.status(403).json({errorMessage:"Invalid Token"});
        }
        next();
    }
    catch{
        res.status(403).json({errorMessage:"Token Validation failed"});
    }
}