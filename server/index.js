const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const userRout = require("./routes/user");
const authRout = require("./routes/auth");
const productRout = require("./routes/product");
const cartRout = require("./routes/cart");
const orderRout = require("./routes/order");
const stripeRoute = require("./routes/stripe");

dotenv.config();

const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB connection successfull"))
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());

app.use("/api/users", userRout);
app.use("/api/auth", authRout);
app.use("/api/products", productRout);
app.use("/api/carts", cartRout);
app.use("/api/orders", orderRout);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running");
});