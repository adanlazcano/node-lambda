require("dotenv/config");

module.exports = {
  db_url: process.env.MONGO_URL,
  port: process.env.PORT,
  token_secret: process.env.TOKEN_SECRET,
  stage: process.env.STAGE,
  api_url: process.env.API_URL,
  api_route: process.env.API_ROUTE,
  enc_key :process.env.ENC_KEY,
  iv:process.env.IV,
  guid:process.env.GUID,
  exp_minutes:process.env.MINUTES_EXPIRATION
};
