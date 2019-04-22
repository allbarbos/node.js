require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env'
})

const express = require('express')
const routes = require('./routes')

class AppController {
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
  }

  routes () {
    this.express.use(routes)
  }
}

module.exports = new AppController().express
