import React from 'react';
import "./ResumeFormTemplate.css";

export default function Template1({ userCard }) {
  return (
    <div id='Template1'>
    <h2>{userCard.Fullname}</h2>
    <p>About: {userCard.about}</p>
    <p>Email: {userCard.email}</p>
    <p>Phone: {userCard.phoneNumber}</p>
    {userCard?.workList && userCard.workList.length > 0 && (
      <div>
        <h3>Work Experience</h3>
        {userCard.workList.map((workItem, index) => (
          <div key={index} className='workExp'>
            <p><strong>Company:</strong> {workItem.companyundefined}</p>
            <p><strong>Role:</strong> {workItem.roleundefined}</p>
            <p><strong>Duration:</strong> {workItem.dateFromWorkundefined} - {workItem.dateUntilWorkundefined}</p>
          </div>
        ))}
      </div>
    )}
    {userCard?.eduList && userCard.eduList.length > 0 && (
      <div>
        <h3>Education</h3>
        {userCard.eduList.map((eduItem, index) => (
          <div key={index} className='eduExp'>
            <p><strong>Education Type:</strong> {eduItem.eduundefined}</p>
            <p><strong>Duration:</strong> {eduItem.dateFromEduundefined} - {eduItem.dateUntilEduundefined}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);
}