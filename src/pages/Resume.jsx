import React, { useContext, useEffect } from "react";
import ResumeForm from "../components/Resume/ResumeForm";
import Spline from '@splinetool/react-spline'

export default function Resume() {

  return (
    <div id = "myResumeFormPage">
      <div className ="my3D">
      <Spline scene="https://prod.spline.design/DuraigTjZS88oURA/scene.splinecode" />  
      </div>
      <ResumeForm id = "ResumeForm"/>
    </div>
  );
}
