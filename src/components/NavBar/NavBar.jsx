import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { useContext } from 'react'
import { userContext } from '../../context/UserProvider'

export default function NavBar() {
  const {handleSignOut,user} = useContext(userContext)
  return (
    <nav className="NavBar">
      <Link to="/">Home</Link>
        <Link to="/Resume">Resume</Link>
        <Link to="/Resumes">Resumes</Link>
        <Link to="/Admin">Admin</Link>
        {user?<button onClick={handleSignOut}>Sign-Out</button>
        :<Link to="/Auth">Auth</Link>}    
    </nav>
  )
}
