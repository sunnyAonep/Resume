import React from 'react'

export default function WorkFormat(props) {
  return (
    <div id='workExp'>
      <p><strong>Company:</strong> {props.userCard.companyundefined}</p>
        <p><strong>Role:</strong> {props.userCard.roleundefined}</p>
        <p><strong>Duration:</strong> {props.userCard.dateFromWorkundefined} - {props.userCard.dateUntilWorkundefined}</p>
    </div>
  )
}
