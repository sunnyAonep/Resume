import React, { useContext, useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase";
import { userContext } from "../../context/UserProvider";
import Template1 from "../templates/Template1";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Template2 from "../templates/Template2";
import Template3 from "../templates/Template3";
import tamplateOne from "../../assets/img/templatsImgs/tamplatOne.png"
import tamplateThree from "../../assets/img/templatsImgs/tamplatThree.png"
import tamplateTwo from "../../assets/img/templatsImgs/tamplatTwo.png"
import "./ResumeCard.css"

export default function ResumeCard() {
  const { user } = useContext(userContext);
  const [formsFromData, setFormsFromData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState(1);


   const downloadPDF = (e) =>{
    console.log(e.target.class);
    console.log(e.target.className);
    const capture = document.querySelector(`.${e.target.className}`);
    console.log();
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      doc.save('receipt.pdf');
    })
  }

  const chooseTemps = (templateNumber) => {
    setSelectedTemplate(templateNumber);
  };
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

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="buttonsTemp">
          <button
            onClick={() => chooseTemps(1)}
            className={`template-button ${selectedTemplate === 1 ? 'selected' : ''}`}
          >
            Template 1
          </button>
          <button
            onClick={() => chooseTemps(2)}
            className={`template-button ${selectedTemplate === 2 ? 'selected' : ''}`}
          >
            Template 2
          </button>
          <button
            onClick={() => chooseTemps(3)}
            className={`template-button ${selectedTemplate === 3 ? 'selected' : ''}`}
          >
            Template 3
          </button>
          </div>
          <div className="template-images">
            <img
              src={tamplateOne}
              alt=""
              className={`template-image ${selectedTemplate === 1 ? 'selected' : ''}`}
            />
            <img
              src={tamplateTwo}
              alt=""
              className={`template-image ${selectedTemplate === 2 ? 'selected' : ''}`}
            />
            <img
              src={tamplateThree}
              alt=""
              className={`template-image ${selectedTemplate === 3 ? 'selected' : ''}`}
            />
          </div>

          {formsCount > 0 ? (
            formsFromData.map((resumeData) => (
              <>
              <div className={`${resumeData.id}`}>
                {selectedTemplate === 1 && <Template1 userCard={resumeData} downloadPDF={downloadPDF} />}
                {selectedTemplate === 2 && <Template2 userCard={resumeData} downloadPDF={downloadPDF} />}
                {selectedTemplate === 3 && <Template3 userCard={resumeData} downloadPDF={downloadPDF} />}
              </div>
                <div className={`buttonsTemp`} >
                <button onClick={downloadPDF} className={`${resumeData.id}`} cFlassName="template-button">Download</button>
                </div>
              </>
            ))
          ) : (
            <p>No data available</p>
          )}
        </>
      )}
    </>
  );
}