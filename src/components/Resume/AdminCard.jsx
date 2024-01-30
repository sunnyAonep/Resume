import React, { useContext, useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { userContext } from '../../context/UserProvider';
import PersonalFormat from './PersonalFormay'; 
import WorkFormat from './WorkFormat'; 
import EduFormat from './EduFormat'; 
import { db } from '../../config/firebase';

export default function AdminCard() {
  const { user } = useContext(userContext);
  const [formsFromData, setFormsFromData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const q = query(collection(db, 'resume'))
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {formsFromData.map((resumeData) => (
            <div className="resume-card" key={resumeData.id}>
              {resumeData.userCard && <PersonalFormat userCard={resumeData.userCard} />}
              {resumeData.userCard?.workList && resumeData.userCard.workList.length > 0 && (
                <div>
                  <h3>Work Experience</h3>
                  {resumeData.userCard.workList.map((workItem, index) => (
                    <WorkFormat key={index} userCard={workItem} />
                  ))}
                </div>
              )}
              {resumeData.userCard?.eduList && resumeData.userCard.eduList.length > 0 && (
                <div>
                  <h3>Education</h3>
                  {resumeData.userCard.eduList.map((eduItem, index) => (
                    <EduFormat key={index} userCard={eduItem} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
