require('dotenv').config()
const PORT = process.env.PORT
const Secret = process.env.Secret
const MONGODB_URI= process.env.MONGODB_URI

module.exports = {
  PORT,
  Secret,
  MONGODB_URI
}