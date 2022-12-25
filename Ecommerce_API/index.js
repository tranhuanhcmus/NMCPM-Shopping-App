const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRout = require("./routes/user");
const authRout = require("./routes/auth");
dotenv.config();
mongoose.connect(process.env.MONGO_URL)
. then(()=> console.log("DB connection successfull"))
.catch((err)=>{console.log(err)});
app.use(express.json());
app.use("/api/user",userRout);
app.use("/api/auth",authRout);
app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server is running");
})