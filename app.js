const express = require('express')
const app = express()
const config = require('./utils/config')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('./utils/logger')
registerRouter = require('./controllers/register')
const loginRouter = require('./controllers/login')
const usersRouter= require('./controllers/users')
const middleware = require('./utils/middleware')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

// route middleware
app.use('/api/register', registerRouter)
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
