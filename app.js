const express = require("express");
const app = express();
require("dotenv").config();
const productRoute = require("./routes/productRoute");
const PORT = process.env.PORT;

//route part******************************************8
app.use("/api/products", productRoute);

app.all("*", (req, res) => {
  res.status(400).send("page not found");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("sever connection failed");
  } else {
    console.log(`server listening at port ${PORT}`);
  }
});
