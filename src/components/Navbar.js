import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {FaCoins} from 'react-icons/fa'

const Navbar = () => {
  return (
    <Link to="/">
        <div className='navbar'>
            <FaCoins className='icon' />
            <h1> Crypto <span className='purple'>Source</span></h1>
        </div>
    </Link>
  )
}

export default Navbar