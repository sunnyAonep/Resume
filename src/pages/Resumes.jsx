import React, { useContext } from 'react'
import ResumeCard from '../components/Resume/ResumeCard'
import { userContext } from '../context/UserProvider';


export default function Resumes() {


  return (
    <div>
     <ResumeCard/>
    </div>
  )
}
