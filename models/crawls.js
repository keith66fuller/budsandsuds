const mongoose = require("mongoose");
const Schema = mongoose.Schema;


mongoose.set('debug', true)


const crawlsSchema = new Schema({
  name: { type: String},
  createdBy: { type: Object},
  pubs: {
    type: Schema.Types.ObjectId,
    ref: "pubs"
    },
  buds: {
    type: Schema.Types.ObjectId,
    ref: "Buds"
    },
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
