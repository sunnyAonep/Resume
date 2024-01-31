import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../context/UserProvider';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import EduList from './EduList';
import WorkList from './WorkList';
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';


export default function ResumeForm(props) {
  const { user } = useContext(userContext);
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [workInfo, setWorkInfo] = useState({});
  const [eduInfo, setEduInfo] = useState({});
  const [ResumeData, setResumeData] = useState([]);
  const [eduList, setEduList] = useState([]);
  const [workList, setWorkList] = useState([]);
  const docRef = collection(db, "resume");

  const changeContactInfoHandler = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
    console.log(formData);
  };

  const changeWorkHandler = (e) => {
    workInfo[e.target.name] = e.target.value;
    setWorkInfo({ ...workInfo });
    console.log(workInfo);
  };
  const changeEduHandle = (e) => {
    eduInfo[e.target.name] = e.target.value;
    setEduInfo({ ...eduInfo });
    console.log(eduInfo);
  };

  const [workExpRederList, setWorkExpRederList] = useState([]);
  const [educationRenderList, setEducationRenderList] = useState([]);

  const createMoreWorkExp = (e) => {
    setWorkList([...workList, workInfo]);
    setWorkExpRederList([
      ...workExpRederList,
      <WorkList handleChange={changeWorkHandler} />,
    ]);
  };

  const createMoreEducation = (e) => {
    setEduList([...eduList, eduInfo]);
    setEducationRenderList([
      ...educationRenderList,
      <EduList handleChange={changeEduHandle} />,
    ]);
  };


    useEffect(() => {
    createMoreWorkExp();
    createMoreEducation();
     }, []);
      

     const nextStage = (e) => {
      switch (currentPage) {
        case 1:
          setResumeData({ ...ResumeData, ...formData });
          setCurrentPage(currentPage + 1);
          break;
        case 2:
          setResumeData({ ...ResumeData, workList });
          setCurrentPage(currentPage + 1);
          break;
        case 3:
          setResumeData({ ...ResumeData, eduList });
          setCurrentPage(currentPage + 1);
          break;
        default:
          break;
      }
    };


  const prevStage = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newResume = { idUser: user.uid,  ...ResumeData };
     const FormDocRef = await addDoc(docRef, newResume);
    console.log(ResumeData);
  };

  return (
    <div>
      <form id='ResumeForm' onSubmit={handleSubmit}>
        {currentPage === 1 ? (
          <>
            {/* <input name="Fullname" placeholder='Full Name' id='Name' type="text" onChange={changeContactInfoHandler} />
            <input name="about" placeholder='about' id='about' type="text" onChange={changeContactInfoHandler} />
            <input name="phoneNumber" placeholder='0548571145' id='PhoneNumber' type="number" onChange={changeContactInfoHandler} />
            <input name="email" placeholder='Example@gmail.com' id='Gmail' type="text" onChange={changeContactInfoHandler} /> */}
            <Box
             sx={{
               '& > :not(style)': { m: 1, width: '40ch' },
             }}
             noValidate
             autoComplete="off">
             <TextField id="outlined-basic" label="Full Name" variant="outlined" name="Fullname" onChange={changeContactInfoHandler}/>
             <TextField id="outlined-basic" label="about" variant="outlined" name="about" onChange={changeContactInfoHandler}/>
             <TextField id="outlined-basic"  type="number" label="0548571145" variant="outlined" name="phoneNumber" onChange={changeContactInfoHandler}/>
             <TextField id="outlined-basic" type="email" label="Example@gmail.com" variant="outlined" name="email" onChange={changeContactInfoHandler}/>
             </Box>
            <button type='button' onClick={nextStage}>next</button>
          </>
        ) : currentPage === 2 ? (
          <>
            {workExpRederList.map((workComponent, index) => (
              
              <div key={index}>
              {workComponent}
            </div>
          ))}
            <button type='button' onClick={createMoreWorkExp}> add one more</button>
            <button type='button' onClick={nextStage}>next</button>
            <button type='button' onClick={prevStage}>back</button>

          </>
        ) : currentPage === 3 ? (
          <>
            {educationRenderList.map((eduComponent, index) => (
              
              <div key={index}>
              {eduComponent}
            </div>
          ))}
            <button type='button' onClick={createMoreEducation}>add one more</button>
            <button type='button' onClick={nextStage}>next</button>
            <button type='button' onClick={prevStage}>back</button>

          </>
        ) : currentPage === 4 ? (
          <>
          <button type="submit" >Submit </button>
          <button type='button' onClick={prevStage}>back</button>
         </>
          ) : null}
      </form>
    </div>
  );
}
