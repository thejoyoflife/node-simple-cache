const NodeCache = require("node-cache");
const getDataFromApi = require("./api");

const DATA_KEY = "DATA_KEY";
const TTL_SECONDS = 60;

class Cache {
  constructor(ttlSeconds) {
    this.cache = new NodeCache({ stdTTL: ttlSeconds || TTL_SECONDS });
  }

  get() {
    const value = this.cache.get(DATA_KEY);
    if (value) {
      return Promise.resolve(value);
    }

    return getDataFromApi().then(data => {
      this.cache.set(DATA_KEY, data);
      return data;
    });
  }
}

module.exports = new Cache();
