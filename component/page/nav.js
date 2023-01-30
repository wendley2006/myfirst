import React from 'react'
import "../style/nav.css"

function nav() {
  return (
<div className='nav'>
   <ul>
    <li><a href='home'>Home</a></li>
    <li><a href='contact'>Contact</a></li>
    <li><a href='about'>About</a></li>
   </ul>
</div>
  )
}

export default nav