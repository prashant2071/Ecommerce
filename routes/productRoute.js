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
    

    router.get('/:productId',getProductById)
    router.post('/',createProduct)
    router.put('/:productId',replaceProduct);
    router.patch('/:prodductId',updateProduct);
    router.delete('/:productId',deleteProduct);

    module.exports=router;