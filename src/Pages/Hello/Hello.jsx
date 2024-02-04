import React from 'react'
import './Hello.css'
import Right from './Right'
import Left from './Left'


function Hello() {
  
  return (
    <div className='hello_container'>
      <Left />
      <Right />
    </div>
  )
}

export default Hello