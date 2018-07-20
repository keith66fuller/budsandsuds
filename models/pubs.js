const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pubSchema = new Schema({
  name: { type: String },
  website: { type: String },
  category: { type: String },
  capacity: Number,
  hours: String,
  zip: Number,
  neighborhood: String,
  drinks: [
    {
      name: String,
      price: Number
    }
  ],
  googleMapsURL: String,
  dateCreated: { type: Date, default: Date.now },
  rating: Number,
  price: String,
  phone: String,
  id: {type: String, unique: true },
  alias: String,
  is_closed: Boolean,
  categories: Array,
  review_count: Number,
  name: String,
  url: String,
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  image_url: String,
  location: {
    city: String,
    country: String,
    address2: String,
    address3: String,
    state: String,
    address1: String,
    zip_code: String
  },
  distance: Number,
  transactions: Array
});

const Pub = mongoose.model("Pub", pubSchema);

module.exports = Pub;
