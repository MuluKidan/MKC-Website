import React from 'react'
import css from './Navbar.css'

function NavLinks() {
  return (
    <div className='navBar__Links'>
      <ul className="navBar__titles">
        <li> <a href="./About.js">ABOUT</a></li>
        <li> <a href="./Ministries.js">MINISTRIES</a></li>
        <li><a href="./Ministries.js">BULLETIN</a></li>
        <li><a href="./Ministries.js">GIVING</a></li>
        <li className='navBar__titles__watchOnline'> <a href = "./WatchOnline.js" >WATCH ONLINE</a></li>
        
      </ul> 
    </div>
  )
}

export default NavLinks
