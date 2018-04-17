const crypto = require('crypto');
module.exports = () => {
  const sha = crypto.createHash('sha256');
  sha.update(Math.random().toString());
  return sha.digest('hex');
}
