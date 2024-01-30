import React from 'react'

export default function EduFormat(props) {
  return (
    <div>
      <p><strong>Education Type:</strong> {props.userCard.eduundefined}</p>
      <p><strong>Duration:</strong> {props.userCard.dateFromEduundefined} - {props.userCard.dateUntilEduundefined}</p>
    </div>
  )
}
