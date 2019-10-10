const axios = require("axios");

exports.getDataFromApi = function() {
  return axios
    .get(process.env.URL)
    .then(res => res.data)
    .catch(err => console.log(err));
};
