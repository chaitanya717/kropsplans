// models/Plan.js
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  name: String,
  upiid: String,
  utrid: String,
  status: String,
});

const planSchema = new mongoose.Schema({
  userid: String,
  mobileno: String,
  planname: String,
  duration: String,
  price: Number,
  payment: paymentSchema,
  startdate: String,
  enddate: String,
  Active: Boolean,
});

module.exports = mongoose.model("Plan", planSchema);
