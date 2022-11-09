const crypto = require('crypto');

const Decrypt = ((encrypted,ENC_KEY,IV) => {
  try{
     let decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  return (decrypted + decipher.final('utf8'));
  }catch(err){
    console.log(err.message)
  }
 
});

module.exports = Decrypt;