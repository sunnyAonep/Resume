import React, { useContext } from 'react'
import ResumeCard from '../components/Resume/ResumeCard'
import { userContext } from '../context/UserProvider';

export default function Resumes() {
  const { user, setUser ,resumeForms} = useContext(userContext);
  return (
    <div>
      {resumeForms.map((item ,id)=>{
        const {userCard} = item 
        return <ResumeCard key={id} userCard={userCard}/>
      })}
    </div>
  )
}
