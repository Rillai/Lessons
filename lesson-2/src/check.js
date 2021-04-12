module.exports = (user, pc) => {
 if (user == pc) {
  console.log('Luck!', user, pc)
  return 'Luck'
 } else {
  console.log('Unluck!', user, pc)
  return 'Unluck'
 }
}
