const jwt= require("jsonwebtoken");
const env= require("../config/index.js");

const verifyToken = (req, res, next) => {
  const bearerToken = req.headers["authorization"];

  if (typeof bearerToken !== "undefined") {
    const token = bearerToken.split(" ")[1];
    req.token = token;
    jwt.verify(req.token, env.token_secret, (err, authData) => {
      if (err) {
        res.status(403).json({ message: "Forbidden access" });
      } else {
        req.authData = authData;
        next();
      }
    });
  } else {
    res.status(403).json({ message: "Forbidden access" });
  }
};

module.exports = verifyToken;
