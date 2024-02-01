import React, { useContext, useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { userContext } from '../../context/UserProvider';
import { db } from '../../config/firebase';
import "../templates/ResumeFormTemplate.css"

export default function AdminCard() {
  const { user } = useContext(userContext);
  const [formsFromData, setFormsFromData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const q = query(collection(db, 'resume'));
        const Snapshot = await getDocs(q);
        const dataFromFirestore = Snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFormsFromData(dataFromFirestore);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    if (user) {
      fetchDataFromFirestore();
    }
  }, [user]);

  return (
    <div>
      {formsFromData.map((userCard) => (
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
      ))}
    </div>
  );
}