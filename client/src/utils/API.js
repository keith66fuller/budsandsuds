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
  // Gets all crawls
  getcrawls: function() {
    return axios.get("/api/crawl");
  },
  // Gets the crawl with the given id
  getcrawl: function(id) {
    return axios.get("/api/crawl/" + id);
  },
  // Deletes the crawl with the given id
  deletecrawl: function(id) {
    return axios.delete("/api/crawl/" + id);
  },
  // Saves a crawl to the database
  savecrawl: function(crawlData) {
    console.log(`CRAWLDATA: ${JSON.stringify(crawlData,null,2)}`)
    return axios.post("/api/crawl", crawlData);
  },
};
