const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

//route /api/users
usersRouter.get('/',async (req, res) =>{
    const users = await User
    .find({})
    res.json(users)
})

//route /api/users
usersRouter.post('/', async (req, res) => {
    const { username, name, password } = req.body

    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return res.status(400).json({
        error: 'username must be unique'
      })
    }
    if (!(username && password)) {
      return res.status(400).json({
        error: "username and password are required",
      });
    }
  
    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = new User({
      username,
      name,
      passwordHash,
    })
  
    const savedUser = await user.save()
    res.status(201).json(savedUser)
  })
module.exports = usersRouter

