import React, { useEffect } from 'react'
import { useContext } from 'react'
import { userContext } from '../../context/UserProvider'
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SignUp(props) {
    const {handleEmailChange ,handlePasswordChange ,handleSignUp} = useContext(userContext)
    useEffect(() => {
      AOS.init();
    }, [])
  return (
    <div className="form-container" data-aos="flip-left">
    <form onSubmit={handleSignUp}>
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic"  type="email" label="email" variant="outlined" name="Email" onChange={handleEmailChange}/>
      <TextField id="outlined-basic" type="password" label="password" variant="outlined" name="password" onChange={handlePasswordChange}/>
      {/* <TextField id="outlined-basic" type="password" label="password" variant="outlined" name="password" onChange={handlePasswordChange}/> */}
      </Box>
      <button type="submit" >Sign Up</button>
    </form>
    <p>Already have an account? <Link to="/" onClick={props.toggleForm}>SignUp</Link></p>
  </div>
  )
}
