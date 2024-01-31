import React from 'react';
import "./TemplateTwo.css";
export default function Template2({ userCard }) {
  return (
    <div id='Template2'>
    <h2>{userCard.Fullname}</h2>
    <p>About: {userCard.about}</p>
    <p>Email: {userCard.email}</p>
    <p>Phone: {userCard.phoneNumber}</p>
    {userCard?.workList && userCard.workList.length > 0 && (
      <div>
        <h3>Work Experience</h3>
        {userCard.workList.map((workItem, index) => (
          <ul key={index} className='workExp'>
            <li><strong>Company:</strong> {workItem.companyundefined}</li>
            <li><strong>Role:</strong> {workItem.roleundefined}</li>
            <li><strong>Duration:</strong> {workItem.dateFromWorkundefined} - {workItem.dateUntilWorkundefined}</li>
          </ul>
        ))}
      </div>
    )}
    {userCard?.eduList && userCard.eduList.length > 0 && (
      <div>
        <h3>Education</h3>
        {userCard.eduList.map((eduItem, index) => (
          <ul key={index} className='eduExp'>
            <li><strong>Education Type:</strong> {eduItem.eduundefined}</li>
            <li><strong>Duration:</strong> {eduItem.dateFromEduundefined} - {eduItem.dateUntilEduundefined}</li>
          </ul>
        ))}
      </div>
    )}
  </div>
);
}
