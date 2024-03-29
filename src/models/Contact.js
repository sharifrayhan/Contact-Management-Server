const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: Number, required: true },
  Address: { type: String, required: true },
  Picture: { type: String, required: true },

});

const Contact = mongoose.model("contacts", contactSchema);

module.exports = Contact;
