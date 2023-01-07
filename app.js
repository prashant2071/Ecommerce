const express = require("express");
const app = express();
const cors =require('cors')
const connectDatabase =require('./database/connection');
require("dotenv").config();
const productRoute = require("./routes/productRoute");
const PORT = process.env.PORT;
connectDatabase()
app.use(cors());
app.use(express.json());
//route part****************************************
app.use("/api/products", productRoute);



//handle unnessary url******************************
app.all("*", (req, res,next) => {
  // res.status(400).send("page not found");
  next("page not found");
});



// error handellng middleware ***********************
app.use( function(err, req, res,next) {
  res
  .status(400)
  .json({
    text: "from error handelling middleware ",
    msg: err.msg|| err,
    status: err.status || 400,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("sever connection failed");
  } else {
    console.log(`server listening at port ${PORT}`);
  }
});
