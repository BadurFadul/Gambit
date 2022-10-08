const registerRounter = require('express').Router()
const data = require('../data')


registerRounter.get('/', (req, res)=>{
    res.send('<h1>Hello World </h1>')
})

registerRounter.get('/',(req,res)=>{
    res.json(data.registers)
})

registerRounter.get('/:id', (req,res)=>{
    const id= Number(req.params.id)
    const register= data.registers.find(re => re.id ===id)
    if (register) {
        res.json(register)
      } else {
        res.status(404).send({ error: 'That id does not exist' })
      }
})

registerRounter.post('/', (req,res)=>{
  const body = req.body
  
  const register ={
    id:body.id,
    value:body.value
  }
  data.registers = data.registers.concat(register)
  res.json(data.registers)
})

registerRounter.delete('/:id', (req,res)=>{
    const id= Number(req.params.id)
    const register= data.registers.filter(re => re.id !==id)
    res.status(204).end()

})


module.exports = registerRounter