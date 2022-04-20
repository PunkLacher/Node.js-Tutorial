//names module
//local (not shared outside this file)
const secret = 'SUPER SECRET'
//shared outside this file
const john = 'john'
const peter = 'peter'

//module.exports lets us share the passed variables
module.exports = { john, peter }