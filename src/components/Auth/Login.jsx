import React from 'react'
import { useContext } from 'react'
import { userContext } from '../../context/UserProvider'
import { Link } from 'react-router-dom'

export default function Login(props) {
    const {handleEmailChange ,handlePasswordChange , handleLogin} = useContext(userContext)
  return (
   <div className="form-container">
      <form onSubmit={handleLogin}>
        <h3>Email:</h3>
        <input type="email" name="Email" onChange={handleEmailChange} />
        <h4>Password:</h4>
        <input type="password" name="password" onChange={handlePasswordChange} />
        <button type="submit">Login</button>
      </form>
      <p>Already have an account? <Link to="/Auth" onClick={props.toggleForm}>Login</Link></p>
    </div>
  )
}