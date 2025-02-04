import React from 'react'
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div className="navbar">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
  )
}

export default Home
