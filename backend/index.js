const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Stripe = require("stripe");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Databse"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//
const userModel = mongoose.model("user", userSchema);

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

//sign up
app.post("/signup", async (req, res) => {
  // console.log(req.body);
  const { email } = req.body;

  userModel.findOne({ email: email }, (err, result) => {
    // console.log(result);
    console.log(err);
    if (result) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({ message: "Successfully sign up", alert: true });
    }
  });
});

//api login
app.post("/login", (req, res) => {
  // console.log(req.body);
  const { email } = req.body;
  userModel.findOne({ email: email }, (err, result) => {
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({
        message: "Login is successfully",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  });
});

//product section

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product", schemaProduct);


const schemaBook = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  persons: Number,
  date: Date,
});
const bookModel = mongoose.model("book", schemaBook);

const orderSchema = new mongoose.Schema({
  data: {
    name: String,
    email: String,
    address: String,
    phone: String,
  },
  cartItems: [{
    name: String,
    qty: Number,
  }],
  totalPrice: Number,
  totalQty: Number,
});

const Orders = mongoose.model("Order", orderSchema);

//save product in data
//api
app.post("/uploadProduct", async (req, res) => {
  // console.log(req.body)
  const data = await productModel(req.body);
  const datasave = await data.save();
  res.send({ message: "Upload successfully" });
});

app.post("/bookTable", async (req, res) => {
  // console.log(req.body)
  const data = await bookModel(req.body);
  const datasave = await data.save();
  res.send({ message: "booked successfully" });
});

app.post("/orderFood", async (req, res) => {
  const orderData = req.body.orderdata;
  console.log("Received order data:", orderData);
  const { name, email, address, phone } = orderData.data;

  const cartItems = {};
  for (const [key, value] of Object.entries(orderData.cartItem)) {
    cartItems[key] = value;
  }

  const orderDocument = new Orders({
    data: { name, email, address, phone },
    cartItems,
    totalPrice: orderData.totalPrice,
    totalQty: orderData.totalQty,
  });

  await orderDocument.save();
  res.send({ message: "ordered successfully" });
});

app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

app.get("/getOrders", async (req, res) => {
  const orders = await Orders.find({});

  const orderItems = orders.map(order => ({
    ...order._doc,
    cartItems: Object.values(order.cartItems ?? {})
  }));

  res.send(JSON.stringify(orderItems));
  console.log(orders);
});

//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
