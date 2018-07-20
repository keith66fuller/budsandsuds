const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: { type: String},
  atPubs: {
    type: Schema.Types.ObjectId,
    ref: "Pubs"
    },
  dateCreated: { type: Date, default: Date.now }
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
