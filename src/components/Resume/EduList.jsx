import React from 'react'

export default function EduList(props) {
  return (
    <div>
      <select name={`edu${props.currentEdu}`} id="eduType" onChange={props.handleChange}>
        <option value="None">None</option>
        <option value="Highschool Diploma">Highschool Diploma</option>
        <option value="Master's Degree">Master's Degree</option>
        <option value="Bachelor's Degree">Bachelor's Degree</option>
      </select>
      <label>From:</label>
      <input name={`dateFromEdu${props.currentEdu}`} type="date" onChange={props.handleChange} />
      <label>Until:</label>
      <input name={`dateUntilEdu${props.currentEdu}`} type="date" onChange={props.handleChange} />
    </div>
  )
}
