const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const crawlsSchema = new Schema({
  name: { type: String},
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "Buds"
    },
  pubs: {
    type: Schema.Types.ObjectId,
    ref: "Pubs"
    },
  buds: {
    type: Schema.Types.ObjectId,
    ref: "Buds"
    },
  crawlDate: {type: Date} ,
  crawlTime: {type: Timestamp},
  reviews: [{
                reviewer: {
                  type: Schema.Types.ObjectId,
                  ref: "Buds"
                  },
                comment: String,
                rating: Number,
                dateCreated:  { type: Date, default: Date.now }
          }],
  dateCreated: { type: Date, default: Date.now }
});

const Crawl = mongoose.model("Crawl", crawlsSchema);

module.exports = Crawl;
