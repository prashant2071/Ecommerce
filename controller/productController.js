const productData = require('../data/productData.json');
const log =require('chalk-console');

const getAllProducts = (req,res) =>{
    const {category} =req.query;
    log.blue('hello');
    category?
    res.json(productData.filter((item)=>item.category==category)):
    res.json(productData)
}
const getProductById = (req,res) =>{
    const {productId} =req.params;
    if(productId>0 && productId <=productData.length){
        res.json(productData[productId-1]);
    }
    else{
        // res.send('index out of bound');
        next('index out of bound');
    }
}
const postProduct = (req,res) =>{
    console.log('req data is',req.body);
    res.send("data recieved successfully")
}
const replaceProduct = (req,res) =>{
    const {productId} = req.params
    res.send("data put recieved successfully");

}
const updateProduct = (req,res) =>{
    const {productId} = req.params

    console.log("patched data successfully");
    
}
const deleteProduct = (req,res) =>{
    const {productId} = req.params
    res.send(`data deleted ${productId}`)
    console.log("data deleted successfully");
    
}
module.exports={
    getAllProducts,
    getProductById,
    postProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
}
    
