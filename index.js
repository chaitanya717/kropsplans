// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const planRoutes = require("./routes/planRoutes");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI =
  "mongodb+srv://chaudharichaitanya932:CWOzxmPtVtn8BnJ4@cluster0.b9hae.mongodb.net/KROPS?retryWrites=true&w=majority&appName=Cluster0"; // Replace with your MongoDB URI

// Middleware
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.send(`
        <h1>Welcome to Agrobuddy Services</h1>
        <p>This is a simple CRUD application for managing services .</p>
    `);
});
// Routes
app.use("/api", planRoutes);

// Connect to MongoDB and start the server
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
