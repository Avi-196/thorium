const ProductModel=require("../models/productdocumentModel")


const createProduct= async function (req, res) {
    let products = req.body
    let CreatedPro = await ProductModel.create(products)
    res.send({data: CreatedPro})
}

module.exports.createProduct=createProduct