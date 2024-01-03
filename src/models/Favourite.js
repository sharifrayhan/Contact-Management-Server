const mongoose = require("mongoose");

const favouriteSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: Number, required: true },
  Address: { type: String, required: true },
  Picture: { type: String, required: true },

});

const Favourite = mongoose.model("favourites", favouriteSchema);

module.exports = Favourite;