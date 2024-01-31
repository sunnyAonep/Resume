import React, { useContext } from 'react'
import ResumeCard from '../components/Resume/ResumeCard'
import { userContext } from '../context/UserProvider';
import Template1 from '../components/templates/Template1';


export default function Resumes() {


  return (
    <div>
     <ResumeCard/>
    </div>
  )
}
