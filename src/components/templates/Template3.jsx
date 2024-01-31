import React from 'react';
import "./TemplateThree.css";

export default function Template3({ userCard }) {
  return (
    <div id='Template3'>
      <h2>{userCard.Fullname}</h2>
      <p>About: {userCard.about}</p>
      <p>Email: {userCard.email}</p>
      <p>Phone: {userCard.phoneNumber}</p>
      <div className="line"></div>
      <div className="side-container">
        {userCard?.workList && userCard.workList.length > 0 && (
          <div className='workExp'>
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
          <div className='eduExp'>
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
    </div>
  );
}