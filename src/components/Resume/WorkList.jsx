import React from 'react'

export default function WorkList(props) {
  return (
    <div>
      <input name={`company${props.currentWork}`} placeholder='Company' id='Company' type="text" onChange={props.handleChange} />
      <input name={`role${props.currentWork}`} placeholder='Role' id='Role' type="text" onChange={props.handleChange} />
      <p>From: </p>
      <input name={`dateFromWork${props.currentWork}`} id='Date' type="date" onChange={props.handleChange} />
      <p>Until: </p>
      <input name={`dateUntilWork${props.currentWork}`} id='Date' type="date" onChange={props.handleChange} />
    </div>
  )
}
