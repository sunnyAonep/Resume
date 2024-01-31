import React from 'react'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

export default function EduList(props) {
  const exp = [
    {
      value: "None",
      label: "None",
    },
    {
      value: 'Highschool Diploma',
      label: 'Highschool Diploma',
    },
    {
      value: "Master's Degree",
      label: "Master's Degree",
    },
    {
      value: "Bachelor's Degree",
      label: "Bachelor's Degree",
    },
  ];
  return (
    <div>
      <Box
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off">
        <TextField
          id="outlined-select-currency"
          name={`edu${props.currentEdu}`}
          select
          label="Select"
          defaultValue="None"
          helperText="Please select your exprtion"
          onChange={props.handleChange}
        >
          {exp.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
     <p>From: </p>
      <TextField id="outlined-basic"  type="date" variant="outlined" name={`dateFromEdu${props.currentEdu}`} onChange={props.handleChange}/>
      <p>Until: </p>
      <TextField id="outlined-basic"  type="date" variant="outlined" name={`dateUntilEdu${props.currentEdu}`} onChange={props.handleChange}/>
      </Box> 
    </div>

  )
}
