const clients = require('../config/clients')

const credentials = (req, res, next) => {
  const { credentials } = req.headers

  if (!credentials) {
    return res.status(400).json({ message: 'Credentials missing' })
  }

  var base64 = Buffer.from(credentials, 'base64').toString()

  if (!(base64.split(':').length === 3)) {
    return res.status(400).json({ message: 'Credentials malformatted' })
  }

  const [client, clientId, clientSecret] = base64.split(':')

  if (
    clientSecret !== clients[client].clientSecret ||
    clientId !== clients[client].clientId
  ) {
    return res.status(400).json({ message: 'Credentials invalid' })
  }

  next()
}

module.exports = credentials
