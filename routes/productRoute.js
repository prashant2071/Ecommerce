const productData = require('../data/productData.json');
const router = require('express').Router() 

router.get('/',(req,res)=>{

    res.json(productData);
    })
    
    router.get('/:productId',(req,res)=>{
        const {productId} =req.params;
        if(productId>0 && productId <=productData.length){
            res.json(productData[productId-1]);
        }
        else{
            res.send('index out of bound');
        }
    })

    module.exports=router;