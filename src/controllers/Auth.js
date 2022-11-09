const jwt =  require("jsonwebtoken");
const env = require("../config/index.js");
const { DECRYPT_LENGTH, TIMESTAMP_TODAY } = require("../constants/index.js");
const Decrypt = require("../decrypt/decrypt.js");
const getDifferenceMinutes = require("../utils/getDifferenceMinutes.js");

 const createToken = (req, res) => {
  const selenus = req?.headers?.authorization;

  if (selenus && selenus.length === DECRYPT_LENGTH) {
    const decryptValue = Decrypt(selenus, env.enc_key, env.iv);

    const splitDecryptValue = decryptValue.split(":");

    const guid = splitDecryptValue[0];

    const unixTime = splitDecryptValue[1];

    if (guid !== env.guid || unixTime > TIMESTAMP_TODAY()) {
      return res.status(403).json({ message: "Invalid token" });
    }

    const differenceMinutes = getDifferenceMinutes(
      TIMESTAMP_TODAY(),
      +unixTime
    );

    if (differenceMinutes > env.exp_minutes) {
      return res.status(403).json({ message: "Invalid token" });
    }

    jwt.sign(
      { guid, unixTime },
      env.token_secret,
      { expiresIn: `${env.exp_minutes}m` },
      (err, token) => {
        if (err) res.status(500).json({ message: err.message });
        res.status(200).json({
          token,
        });
      }
    );
  } else {
    res.status(502).json({ message: "Invalid Token" });
  }
};


module.exports = {createToken}; 