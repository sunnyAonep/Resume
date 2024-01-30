import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from "./pages/Home"
import Auth from './pages/Auth'
import Resume from './pages/Resume'
import AdminPage from './pages/AdminPage'
import UserProvider from './context/UserProvider'
import Resumes from './pages/Resumes'
import "./App.css"

function App() {

  return (
    <UserProvider>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/Auth" element={<Auth/>} />
        <Route path="/" element={<Home/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/Resumes" element={<Resumes/>} />
          <Route path="/Admin" element={<AdminPage/>} />
      </Routes>
    </BrowserRouter>
    </UserProvider>
  )
}

export default App
