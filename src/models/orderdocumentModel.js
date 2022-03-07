const mongoose=require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const OrderSchema=new mongoose.Schema({
    userId:{type:ObjectId,ref:"Doc"},
    productId:{type:ObjectId,ref:"Product"},
    amount:Number,
    date:String,
    isFreeAppUser:{
        type:Boolean,
        default:true
    }

},{timestamps:true})

module.exports=mongoose.model('Order',OrderSchema)