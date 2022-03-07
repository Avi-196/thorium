const mongoose=require("mongoose")
const UserdocSchema=new mongoose.Schema({


    name:String,
    balance:{
        type:Number,
        default:true
    },
    address:String,
    age:Number,
    gender:{
        type:String,
        enum:["male","female","LGBTQ"]
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }

},{timestamps:true})

module.exports=mongoose.model('Doc',UserdocSchema)