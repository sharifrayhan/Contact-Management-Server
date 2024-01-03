const Favourite = require("../models/Favourite");

// Create a new favourite
const createFavourite = async (req, res) => {
  try {
    const { Name, Email, Phone, Address, Picture } = req.body;
    const newFavourite = new Favourite({
      Name,
      Email,
      Phone,
      Address,
      Picture,
    });
    await newFavourite.save();
    res.status(201).json({
      message: "Favourite created successfully",
      favourite: newFavourite,
    });
  } catch (error) {
    console.error("Error creating favourite:", error);
    res.status(500).json({ error: "Internal Server Error here" });
  }
};

// Get all favourites
const getAllFavourites = async (req, res) => {
  try {
    const favourites = await Favourite.find().populate("contact").exec();

    res.json(favourites);
  } catch (error) {
    console.error("Error getting favourites:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get a specific favourite
const getAFavourite = async (req, res) => {
  try {
    const favourite = await Favourite.findById(req.params.id).populate(
      "contact"
    );

    if (!favourite) {
      return res.status(404).json({ error: "Favourite not found" });
    }

    res.json(favourite);
  } catch (error) {
    console.error("Error getting favourite by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a favourite by ID
const deleteFavourite = async (req, res) => {
  try {
    const deletedFavourite = await Favourite.findByIdAndDelete(req.params.id);
    if (!deletedFavourite) {
      return res.status(404).json({ error: "Favourite not found" });
    }
    res.json({
      message: "Favourite deleted successfully",
      favourite: deletedFavourite,
    });
  } catch (error) {
    console.error("Error deleting favourite by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createFavourite,
  getAllFavourites,
  getAFavourite,
  deleteFavourite,
};
