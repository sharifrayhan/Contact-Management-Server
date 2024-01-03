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
    origin: [process.env.LOCAL_CLIENT, process.env.CLIENT],
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

const contactsController = require("./src/controllers/contactsController");
const favouritesController = require("./src/controllers/favouritesController");

// Users
app.get("/contacts", contactsController.allContacts);
app.post("/contacts", contactsController.createContact);
app.put("/contacts/:id", contactsController.updateContact);
app.get("/contacts/:id", contactsController.singleContact);
app.delete("/contacts/:id", contactsController.deleteContact);

// Favourites
app.get("/favourites", favouritesController.getAllFavourites);
app.post("/favourites", favouritesController.createFavourite);
app.get("/favourites/:id", favouritesController.getAFavourite);
app.delete("/favourites/:id", favouritesController.deleteFavourite);

app.get("/", (req, res) => {
  res.send("Welcome to Server!");
});
