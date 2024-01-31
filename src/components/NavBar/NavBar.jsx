import React from 'react'
import { Link } from 'react-router-dom'
import "./NavBar.css"
import { useContext } from 'react'
import { userContext } from '../../context/UserProvider'
import JobIcon from "../../assets/img/JobIcon.png"

export default function NavBar() {
  const {handleSignOut,user ,adminIsIn} = useContext(userContext)
  return (
    <nav className="NavBar">
      <img src={JobIcon} alt="" />
        {user?(<>
        <Link to="/">Home</Link>
        <Link to="/Resume">Resume</Link>
        <Link to="/Resumes">Resumes</Link>
        {adminIsIn?
          <Link to="/Admin">Admin</Link>
        :null
        }
        <button onClick={handleSignOut}>Sign-Out</button></>)
        :(<><Link to="/">Home</Link>
        <Link to="/Auth">Auth</Link></>)
        }    
    </nav>
  )
}
