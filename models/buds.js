const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const budSchema = new Schema({
  username: { type: Schema.Types.String },
  firstName: { type: Schema.Types.String },
  lastName: { type: Schema.Types.String },
  loginProvider: { type: Schema.Types.String },
  email: Schema.Types.String,
  photo: Schema.Types.String,
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
  active: Schema.Types.Boolean,
  dateCreated: { type: Schema.Types.Date, default: Date.now }
});

const Bud = mongoose.model("Bud", budSchema);

module.exports = Bud;
