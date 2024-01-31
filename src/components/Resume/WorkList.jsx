import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import React from 'react'

export default function WorkList(props) {
 
  return (
    <div>
    <Box
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Company" variant="outlined" name={`company${props.currentWork}`} onChange={props.handleChange}/>
      <TextField id="outlined-basic" label="Role" variant="outlined" name={`role${props.currentWork}`} onChange={props.handleChange}/>
      <p>From: </p>
      <TextField id="outlined-basic"  type="date" variant="outlined"name={`dateFromWork${props.currentWork}`} onChange={props.handleChange}/>
      <p>Until: </p>
      <TextField id="outlined-basic"  type="date" variant="outlined" name={`dateUntilWork${props.currentWork}`} onChange={props.handleChange}/>
      </Box> 
    </div>
  )
}
