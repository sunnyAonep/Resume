import React, { useContext, useState } from 'react'
import { userContext } from '../context/UserProvider'
import Login from '../components/Auth/Login'
import SignUp from '../components/Auth/SignUp'
import { Navigate } from 'react-router-dom';

export default function Auth() {
  const {user} = useContext(userContext)
  const [signButton, setSignButton] = useState(false);
  const toggleForm = ()=>{
    setSignButton(!signButton)
  }

  if (user) {
        return <Navigate to="/"></Navigate>;
      }

  return (
    <div id='authPage'>
      {signButton?(<Login toggleForm = {toggleForm}/> )
      :(<SignUp toggleForm = {toggleForm}/>)
    }
      
      
    </div>
  )
}
