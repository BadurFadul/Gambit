const express = require('express')
const app = express()
registerRouter = require('./controllers/register')
const loginRouter = require('./controllers/login')
const usersRouter= require('./controllers/users')
const middleware = require('./utils/middleware')


app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/register', registerRouter)
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app