const axios = require("axios");

module.exports = function() {
  return axios
    .get(process.env.URL)
    .then(res => res.data)
    .catch(err => console.log(err));
};
