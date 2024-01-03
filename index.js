const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://contact-management-client-sharifrayhan.netlify.app",
    ],
    credentials: true,
  })
);
app.use(express.json());


// Connect to MongoDB
const connectDB = require("./src/config/mongoose");
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



app.get("/", (req, res) => {
  res.send("Welcome to Server!");
});