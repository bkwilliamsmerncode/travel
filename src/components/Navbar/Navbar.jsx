import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiWorld } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css"
import { layer } from '@fortawesome/fontawesome-svg-core';


const Navbar = () => {

const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);

const closeMobileMenu = () => setClick(!click)

  return (
<>
<nav className="navbar">
  <div className="navbar-container">
    <Link to="/" className="navber-logo">
       TRVL <GiWorld /> 
    </Link>
    <div className="menu-icon" onClick={handleClick}>
{click ? <IoMdClose size={"35px"} /> : <GiHamburgerMenu size={"35px"} /> }
    </div>
    <ul className={click ? 'nav-menu active' : 'nav-menu'} >
      <li className='nav-item'>
        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
        Home
        </Link>
      </li>
    </ul>
  </div>
</nav>
</>
  )
}

export default Navbar
