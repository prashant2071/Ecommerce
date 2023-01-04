const logger1 =(req,res,next) =>{
    console.log('from first middleware');
    next();
}
const logger2 =(req,res,next) =>{
    console.log('from second middleware');
    next();
}
module.exports={
    logger1,
    logger2
}