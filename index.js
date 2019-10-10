const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cache = require("./cached-data");

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(compression());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return cache.get().then(data => res.status(200).json(data));
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.listen(PORT, () => console.log("Server listening at port:", PORT));
