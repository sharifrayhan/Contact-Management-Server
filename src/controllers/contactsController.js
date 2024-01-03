const Contact = require('../models/Contact');

// Get all contacts
const allContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a single Contact by ID
const singleContact = async (req, res) => {
  const ContactId = req.params.id;

  try {
    const Contact = await Contact.findById(ContactId);

    if (!Contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(Contact);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new Contact
const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).send('Contact created successfully');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

// Update a Contact by ID
const updateContact = async (req, res) => {
  const ContactId = req.params.id;

  try {
    const updatedContact = await Contact.findByIdAndUpdate(ContactId, req.body, {
      new: true,
    });

    if (!updatedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(updatedContact);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a Contact by ID
const deleteContact = async (req, res) => {
  const ContactId = req.params.id;

  try {
    const deletedContact = await Contact.findByIdAndDelete(ContactId);

    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  allContacts,
  singleContact,
  createContact,
  updateContact,
  deleteContact,
};
