const express = require("express");
const{ createToken }  = require("../controllers/Auth.js");

const routes = express.Router();

routes.post("/token", createToken);

module.exports = routes;
