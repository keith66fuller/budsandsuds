const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budSchema = new Schema({
  username: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  loginProvider: { type: String },
  email: String,
  photo: String,
  favoriteDrinks: {
    type: Schema.Types.ObjectId,
    ref: "Drink"
    },
  favoritePubs: {
    type: Schema.Types.ObjectId,
    ref: "Pubs"
    },
  favoriteCrawls: {
    type: Schema.Types.ObjectId,
    ref: "Crawls"
    },
  allCrawls: {
    type: Schema.Types.ObjectId,
    ref: "Crawls"
    },
  active: Boolean,
  dateCreated: { type: Date, default: Date.now }
});

const Bud = mongoose.model("Bud", budSchema);

module.exports = Bud;
