const mongoose =require('mongoose')
function connectDatabase (){
    mongoose.set('strictQuery', true);
    mongoose.connect("mongodb://localhost/ecommerce-app",(err)=>{
        if(err){
            console.log("error is",err);
            return;
        }
        console.log("database created successfully");
    })
}
module.exports=connectDatabase