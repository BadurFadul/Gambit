const info = (...parms) => {
    console.log(...parms)
}
const error = (...params) => {
    console.error(...params)
  }
  
  module.exports = {
    info, error
  }