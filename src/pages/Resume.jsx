import React, { useContext, useEffect } from "react";
import ResumeForm from "../components/Resume/ResumeForm";
import { useState } from "react";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { userContext } from "../context/UserProvider";
import ResumeCard from "../components/Resume/ResumeCard";

export default function Resume() {
  // const { user, setUser ,resumeForms} = useContext(userContext);
  // const [Forms, setForms] = useState([]);
  // const [resumeForm, setResumeForm] = useState({});
  // const docRef = collection(db, "resume");

  // const handleChange = (e) => {
  //   resumeForm[e.target.name] = e.target.value;
  //   setResumeForm({ ...resumeForm });
  // };
  

  // const handelSubmitForm = async (e) => {
  //   e.preventDefault();
  //   console.log(resumeForm);
  //   const newCard = { ...resumeForm };
  //   const newResume = { idUser: user.uid, userCard: newCard };
  //   const FormDoc = await addDoc(docRef, newResume);
  //   setForms([...Forms, { ...FormDoc }]);
  //   setResumeForm([...Forms, { resumeForm }]);
  // };

  return (
    <div>
      <ResumeForm/>
    </div>
  );
}
