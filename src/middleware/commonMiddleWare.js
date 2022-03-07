const commonMW=require("../middleware/commonMiddleWare")

const midware=async function(req,res,next){
    let headers=req.header
    if(!headers.isFreeAppUser){
        res.send("header is mot present")
    }else{
        next()
    }
}
module.exports.midware=midware
