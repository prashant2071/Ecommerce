const productData = require('../data/productData.json');
const log =require('chalk-console');
const ProductModel = require('../models/productModel');
const { Mongoose } = require('mongoose');

const getAllProducts =async (req,res) =>{
    try {
        const { category,price } = req.query;
        if (category) {
            const filteredProducts = await ProductModel.find({ category });
            res.json(filteredProducts)
        }else if(price){
            const filteredProducts= await ProductModel.find({price:{$gte:price}})
            res.json(filteredProducts)
        } 
        else {
            const productData = await ProductModel.find();
            res.json(productData)
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}
const getProductById =async (req,res) =>{
    try {
        const { productId } = req.params
        console.log("the productId is ",productId)
        const productData = await ProductModel.find({ _id:productId })
        res.json(productData)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}
const createProduct = async (req,res) =>{
    try{
        //  const product = new ProductModel(req.body);
        //  product.save();

        //Alternate method 
        const product = await ProductModel.create(req.body);
         res.status(200).json({
            message:"data save successfully",
            data:product});
    }
    catch(err){
        if(err.code ===1100){
            res.status(500).json({message:"Duplicate title is node allowed"})
        }
        else{
            res.status(500).json({message:err.message})
        }

    }


}
const replaceProduct = async (req,res) =>{
    try{
    const {productId} = req.params;
    const replaceProduct = await ProductModel.findOneAndReplace({_id: productId},req.body,{new:true})
    res.json({replaceProduct})
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }


}
const updateProduct = async(req,res) =>{
    try{
        const {productId} = req.params;
        const updatedProduct = await ProductModel.findByIdAndUpdate({_id: productId},req.body,{new:true}) //{new:true} return newly updated json data
        res.json({updatedProduct})
        }
        catch(err){
            res.status(500).json({msg:err.message})
        }
    
}
const deleteProduct = async(req,res) =>{
    try{
        const {productId} = req.params;
        const deleteProduct = await ProductModel.findByIdAndDelete(productId)
        res.json({deleteProduct})
        }
        catch(err){
            res.status(500).json({msg:err.message})
        }
    
}
module.exports={
    getAllProducts,
    getProductById,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}
    
