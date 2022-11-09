const express = require("express");
const cors = require("cors");
const fs  =require("fs");
const path =require("path");
const env = require("./src/config/index.js");
require("./src/config/connection.js");
const AuthRoutes = require("./src/routes/Auth.js");
const plotRoutes = require("./src/routes/Plot.js");
const verifyToken = require("./src/middlewares/verifyToken.js");
const morgan =require("morgan");
const { TIMESTAMP_TODAY } = require("./src/constants/index.js");

const app = express();

// const __dirname = path.resolve();

const apiRoute = `${env.stage}/${env.api_route}`;

setTimeout(TIMESTAMP_TODAY, 1000);

// const logger = fs.createWriteStream(path.join(__dirname, "accessLog.log"), {
//   flags: "a",
// });

// app.use(morgan("combined", { stream: logger }));

app.set("port", env.port);
app.use(express.json());

app.use(cors());

app.get("/", (_, res) => {
  try {
    res.status(200).json({ message: "Welcome to server" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.use(`/`, AuthRoutes);

app.use(`/plots`, verifyToken, plotRoutes);

app.use((req, res) => {
  console.log(req.path);

  res.status(404).json({ message: "Route not found" });
});

// app.listen(app.get("port"), (_) => {
//   try {
//     console.log(`Server running on port ${app.get("port")}`);
//   } catch (err) {
//     console.log(err.message);
//   }
// });

module.exports = app;