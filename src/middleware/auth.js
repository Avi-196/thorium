
const tokenCheck= async function(req,res,next){
    const token=req.header["x-Auth-token"];

    if(!token){
        return res.send("a token is required")
    }
    try{
        const decode=jwt.verify(token,config.Token_Key)
        req.user=decode

    }catch(err){
        return res.send("invalid token")

    }
     return next()

}
module.exports.tokenCheck=tokenCheck




// module.exports.isAuthorized  = function(req, res, next) {

//     User.findById(req.session.userId).exec(function (error, user) {
//         if (error) {
//             return next(error);
//         } else {      
//             if (user === null) {     
//                 var err = new Error('Not authorized! Go back!');
//                 err.status = 401;
//                 return next(err);
//             } else {
//                 return next();
//             }
//         }
//     });
// }
  