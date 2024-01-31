import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from "./pages/Home"
import Auth from './pages/Auth'
import Resume from './pages/Resume'
import AdminPage from './pages/AdminPage'
import { userContext } from './context/UserProvider'
import Resumes from './pages/Resumes'
import "./App.css"

function App() {
  const { user , adminIsIn} = useContext(userContext);
  
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        
        {user?
          <Route path="/Auth" element={<Auth/>} />
          :null}
        <Route path="/" element={<Home/>} />
          <Route path="/Resume" element={<Resume/>} />
          <Route path="/Resumes" element={<Resumes/>} />
          {adminIsIn?
            <Route path="/Admin" element={<AdminPage/>} />
            :null}
      </Routes>
    </BrowserRouter>

  )
}

export default App
