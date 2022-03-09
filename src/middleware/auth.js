  const jwt=require("jsonwebtoken")
const tokenCheck= async function(req,res,next){
    let token=req.header["x-Auth-token"];

    if(!token){
        return res.send("a token is required")
    }
    
        let decode=jwt.verify(token,"functionup-thorium")
        if(!decode){
            return res.send("a token is invalid");




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
  