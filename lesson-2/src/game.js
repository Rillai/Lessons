const selector = require('./radio')
const check = require('./check')
const logger = require('./logger')

const randomize = () => {
 return Math.floor(Math.random() * 2 + 1)
}
const translate = (key) => {
 const variants = {
  1: 'heads',
  2: 'tails',
 }
 return variants[key]
}
const getAI = () => {
 return translate(randomize())
}
module.exports = async () => {
 let user, pc, winner
 let err = false
 try {
  pc = getAI()
  user = await selector({
   name: 'Heads and Tails',
   message: 'Your choise',
   choices: ['heads', 'tails'],
  })
  winner = check(user, pc)
 } catch (err) {
  console.log('Crush', err)
 } finally {
  if (winner) {
   logger(winner)
  }
 }
}
