const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const encode = async (user) => {
  const token = jwt.sign(
    { user_id: user.id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "24h",
    }
  );

  return token;
}

module.exports = { encode }