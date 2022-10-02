const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('./users')
const config = require('../utils/config')

loginRouter.post('/', async (req, res) => {
    const { username, password } = req.body
    const user = await User.users.find(user => user.username == username)
    if(user == null) {
        return res.status(400).send('Username does not exist')
    }
    const passwordCorrect = bcrypt.compare(password, user.passwordHash)
    if (!(user && passwordCorrect)) {
        return response.status(401).json({
          error: 'invalid username or password'
        })
      }
    const token = jwt.sign(username, config.Secret)
    res.status(200).send({token, username:user.username})

})

module.exports = loginRouter
