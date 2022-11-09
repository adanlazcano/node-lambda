 const FRAME_MSG_TYPE = "1";
 const DECRYPT_LENGTH = 64;
 const TIMESTAMP_TODAY = (_) => Math.floor(new Date().getTime() / 1000);

module.exports = {
FRAME_MSG_TYPE,
DECRYPT_LENGTH,
TIMESTAMP_TODAY
}
