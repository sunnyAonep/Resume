import Spline from '@splinetool/react-spline'
import React, { useContext } from 'react'
import SingUpPhoto from "../assets/img/Sign-Up.png"
import DownloadPhoto from "../assets/img/download.png"
import WriteResumePhoto from "../assets/img/write-resume.png"
import { Link } from 'react-router-dom'
import { userContext } from '../context/UserProvider'

export default function Home() {
  const {user} =  useContext(userContext)

  return (
        <div id='Homepage'>
    <div id="my3D">
        <Spline scene="https://prod.spline.design/5kbjc97EbY9C5TOB/scene.splinecode" />
      </div>
      <div id='secondeOnHome'>
      <div id='aboutUs'>
        <h1>Welcome to Resume Generator</h1>
        <p>Elevate your job search with our Resume Generator Web – an intuitive platform that simplifies resume creation. 
          Access customizable templates, dynamic content suggestions, and real-time formatting assistance to craft a polished and professional resume in minutes.
          Make a lasting impression on employers and accelerate your career journey effortlessly.</p>
      </div>
      <section id="main-section">
        <h2>How It Works</h2>
        <div className="step">
          <p>1. Sign up</p>
          <img src={SingUpPhoto} alt="Sign Up" />
        </div>
        <div className="step">
          <p>2. Enter your information</p>
          <img src={WriteResumePhoto} alt="Write Resume" />
        </div>
        <div className="step">
          <p>3. Download your professional resume</p>
          <img src={DownloadPhoto} alt="Download Resume" />
        </div>
    
        <h2>User Testimonials</h2>
        <p>"This resume builder helped me land my dream job! Highly recommended."</p>
    
        {!user ? <Link to="/Auth"><button className="button">Get Started</button></Link> : null}
      </section>
    
      <section id="latest-articles">
        <h2>Latest Articles</h2>
        <p>Check out our blog for valuable tips on creating an impressive resume and advancing your career.</p>
      </section>
    
      <footer id="footer">
        <p>Contact us at: <a href="mailto:info@yourresumebuilder.com">info@yourresumebuilder.com</a></p>
      </footer>
    </div>
    </div>
  );
}