import React from 'react'

export default function PersonalFormay(props) {
  return (
    <div className="personal-details">
    <h2>{props.userCard.Fullname}</h2>
    <p>{props.userCard.about}</p>
    <p>Phone: {props.userCard.email}</p>
    <p>Email: {props.userCard.phoneNumber}</p>
  </div>
  )
}
