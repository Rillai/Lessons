const minimist = require('minimist')
const fs = require('fs')
const path = require('path')

const args = minimist(process.argv.slice(2), {
  alias:{
    stateless:'s',
    name:'n'
  }
})

const componentName = args.name.toLowerCase()

const cssTemplate = 
`.${componentName}{

}
`

const jsTemplate = 
`import component from './${componentName}.jsx'
`

const jsxTemplate = args.stateless 
  ? require('./stateless')(componentName) 
  : require('./statefull')(componentName)

fs.mkdirSync(path.resolve(__dirname, '..', '..', 'src', 'components', componentName))

fs.writeFileSync(path.resolve(__dirname, '..', '..', 'src', 'components', componentName, 'style.scss'), cssTemplate)

fs.writeFileSync(path.resolve(__dirname, '..', '..', 'src', 'components', componentName, 'index.js'), jsTemplate)

fs.writeFileSync(path.resolve(__dirname, '..', '..', 'src', 'components', componentName, `${componentName}.jsx`), jsxTemplate)
