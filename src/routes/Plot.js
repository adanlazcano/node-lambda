const express =require("express");
const { getPlots } = require("../controllers/Plot.js");

const routes = express.Router();

routes.get("/", getPlots);

module.exports = routes;
