import axios from "axios";

export default {
  getarticles: function() {
    return axios.get("/api/article");
  },
  getarticle: function(id) {
    return axios.get("/api/article/" + id);
  },
  deletearticle: function(id) {
    return axios.delete("/api/article/" + id);
  },
  savearticle: function(articleData) {
    return axios.post("/api/article", articleData);
  },
};