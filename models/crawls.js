const mongoose = require("mongoose");
const Schema = mongoose.Schema;


mongoose.set('debug', true)


const crawlsSchema = new Schema({
  name: { type: String},
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "Buds"
    },
  pubs: {
    type: Schema.Types.ObjectId,
    ref: "Buds"
    },
  pubs: [{
    type: Schema.Types.ObjectId,
    ref: "pubs"
    }],
  buds: {
    type: Schema.Types.ObjectId,
    ref: "Buds"
    },
  crawlDate: {type: Date} ,
  reviews: [{
                reviewer: {
                  type: Schema.Types.ObjectId,
                  ref: "Buds"
                  },
                comment: Schema.Types.String,
                rating: Schema.Types.Number,
                dateCreated:  { type: Schema.Types.Date, default: Date.now }
          }],
  dateCreated: { type: Schema.Types.Date, default: Date.now }
});

const Crawl = mongoose.model("Crawl", crawlsSchema);

module.exports = Crawl;
