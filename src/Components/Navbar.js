import React from 'react'
import { NavLink } from 'react-router-dom' //it already contains a anchor tag so we can directly use it for making links

const Navbar = () => {
  const navlink = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }
  return (
    <nav>
      <NavLink to='/' style={navlink}>Home</NavLink>
      <NavLink to='/about' style={navlink}>About</NavLink>
      <NavLink to='/product' style={navlink}>Product</NavLink>
    </nav>
  )
}

export default Navbar