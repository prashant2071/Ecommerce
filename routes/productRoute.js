const productData = require('../data/productData.json');
const router = require('express').Router();
const log =require('chalk-console');


router.get('/',(req,res)=>{
    console.log('hello')
    const {category} =req.query;
    log.blue('hello');
    category?
    res.json(productData.filter((item)=>item.category==category)):
    res.json(productData)
    })
    

    router.get('/:productId',(req,res,next)=>{
        const {productId} =req.params;
        if(productId>0 && productId <=productData.length){
            res.json(productData[productId-1]);
        }
        else{
            // res.send('index out of bound');
            next('index out of bound');
        }
    })

    module.exports=router;