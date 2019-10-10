const NodeCache = require("node-cache");
const api = require("./api");

const DATA_KEY = "DATA_KEY";
const TTL_SECONDS = 60;
const cache = new NodeCache({ stdTTL: TTL_SECONDS });

exports.get = function() {
  const value = cache.get(DATA_KEY);
  if (value) {
    console.log("Returning Cached Value...");
    return Promise.resolve(value);
  }

  console.log("Calling API and setting cache...");
  return api.getDataFromApi().then(data => {
    cache.set(DATA_KEY, data);
    return data;
  });
};
