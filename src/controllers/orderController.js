
const { count } = require("console")

const OrderModel=require("../models/orderdocumentModel")
//const userdocument=require("../models/userdocument")
//const productdocument=require("../models/productdocument")
const productdocumentModel=require("../models/productdocumentModel")
const UserDocModel=require('../models/userdocumentModel')


const createOrder= async function (req, res) {
    let ordered = req.body;
     let UserID=ordered. userId;
     //console.log(UserID)
     let ProductID=ordered.productId

     //console.log(ProductID)
         
    if(!UserID) return res.send('required valid id.')

    
    let userId = await   UserDocModel.findById(UserID)
    if(!userId) return res.send('error')

    
    if(!ProductID) return res.send('require valid product id') 

    
    let productId = await productdocumentModel.findById(ProductID)
    if(!productId) return res.send('Error')


     let orderCreated = await OrderModel.create(ordered)
     res.send({msg:orderCreated})

}


module.exports.createOrder=createOrder
