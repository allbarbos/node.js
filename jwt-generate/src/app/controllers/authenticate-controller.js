const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

const token = (req, res) => {
  const expiresIn = 3600
  const token = jwt.sign({}, authConfig.secret, {
    expiresIn
  })

  return res.status(200).json({ expiresIn, token })
}

module.exports = {
  token
}
