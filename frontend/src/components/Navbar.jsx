import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
     <div>
        <h1>Book Store</h1>
        <div>
        <Link to = "/">Home</Link>
        <Link to ="/create">Create</Link>
        </div>
     </div>
    </div>
  )
}

export default Navbar
