const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: Number, required: true },
  Address: { type: String, required: true },
  Picture: { type: URL, required: true },

});

const Contact = mongoose.model("Contact", taskSchema);

module.exports = Contact;
