const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()

const users=[]
usersRouter.get('/', (req, res) =>{
    
    res.json(users)
})

usersRouter.post('/', async (req, res)=>{
    const { username, name, password } = req.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const user = ({
        username,
        name,
        passwordHash,
      })
      users.push(user)
      res.status(201).json(user)
})


module.exports = usersRouter

