const mongoose = require("mongoose");
const env = require("./index.js");

mongoose
  .connect(env.db_url)
  .then((_) => console.log("DB connected"))
  .catch((err) => console.log(err.message));
