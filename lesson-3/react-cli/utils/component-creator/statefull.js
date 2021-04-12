module.exports = name =>{
  return(
`import React from 'react'
import './style.scss'
  
export default const ${ name } = (props) =>{
  const { } = props;
  return <div className='${ name }'>

  </div>
}`)
}