const router = require('express').Router();
const{
    getAllProducts,
    getProductById,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
} =require('../controller/productController')
const {logger1,logger2} =require('../middleware/middleware')

router.get('/',[logger1,logger2], getAllProducts)
    

router.post('/',createProduct)
    router.get('/:productId',getProductById)
    router.put('/:productId',updateProduct);
    router.patch('/:productId',replaceProduct);
    router.delete('/:productId',deleteProduct);

    module.exports=router;