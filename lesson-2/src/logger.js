const writer = require('./writer')
const urlLog = './log.txt'

module.exports = async (res) => {
 try {
  await writer(urlLog, res)
  return true
 } catch {
  return false
 }
}
