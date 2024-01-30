import { useContext, useEffect, useState } from "react";
import "./ResumeFome.css"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { userContext } from "../../context/UserProvider";
import WorkFormat from "./WorkFormat";
import EduFormat from "./EduFormat";
import PersonalFormay from "./PersonalFormay";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function ResumeCard() {
  const { user } = useContext(userContext);
  const [formsFromData, setFormsFromData] = useState([]);
  const [loading, setLoading] = useState(true);

  const downloadPDF = () =>{
    const capture = document.querySelector(".resume-card")
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL("img/png")
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      doc.save('receipt.pdf');
    })
  }
  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const q = query(collection(db, 'resume'), where('idUser', '==', user.uid));
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
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

  const formsCount = formsFromData.length;
  console.log(formsCount);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {formsCount > 0 ? (
            formsFromData.map((resumeData) => (
              <div className="resume-card" key={resumeData.id}>
                {resumeData.userCard && <PersonalFormay userCard={resumeData.userCard} />}
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
                <button onClick={downloadPDF}>Download</button>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
    </>
  );
}