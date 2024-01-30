import React, { createContext, useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const userContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resumeForms, setResumeForms] = useState([]);
  const [adminIsIn , setadminIsIn] = useState(false)

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        console.log(newUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        setUser(newUser);
        console.log(newUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log('Sign Out'))
      .catch((error) => console.log(error));
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const adminUser = (userState)=>{
    if (userState === "s7g81QYG40XqmWtBSSlFSX1u7CG2") {
      setadminIsIn(true)
    }
    else{
      setadminIsIn(false)
    }
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userState) => {
      if (userState) {
        setUser(userState);
        takeUserResumes(userState.uid);
        adminUser(userState.uid)
      } else {
        setUser(null);
        setResumeForms([]);
        setadminIsIn(false)
      }
    });
    return () => unsubscribe();
  }, []);
  console.log(adminIsIn);
  

  const takeUserResumes = async (userId) => {
    if (userId) {
      const q = query(collection(db, 'resume'), where('idUser', '==', userId));
      const querySnapshot = await getDocs(q);
      const dataFromFirestore = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setResumeForms(dataFromFirestore);
    }
  };

  const shared = {
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
    handleSignUp,
    setUser,
    user,
    handleSignOut,
    resumeForms,
    adminIsIn
  };

  return <userContext.Provider value={shared}>{children}</userContext.Provider>;
}
