import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <div>
      <input type='search' placeholder='search for any product'/>
      </div>
      <nav>
        <Link to='Featured'>Featured</Link>
        <Link to='New'>New</Link>
      </nav>
      <Outlet />
      </>
  )
}

export default Product