import axios from "axios";

export default {
  // Gets all pubs
  getpubs: function() {
    return axios.get("/api/pub");
  },
  // Gets the pub with the given id
  getpub: function(id) {
    return axios.get("/api/pub/" + id);
  },
  // Deletes the pub with the given id
  deletepub: function(id) {
    return axios.delete("/api/pub/" + id);
  },
  // Saves a pub to the database
  savepub: function(pubData) {
    return axios.post("/api/pub", pubData);
  },

  getcrawls: function() {
    return axios.post("/api/crawl");
  },

  savecrawl: function(crawlData) {
    return axios.post("/api/crawl", crawlData);
  },
};
