import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCPUuLz2UYHjo0Ng_O-H5xCegn2sH9V9XU",
  authDomain: "resume-project-598cd.firebaseapp.com",
  projectId: "resume-project-598cd",
  storageBucket: "resume-project-598cd.appspot.com",
  messagingSenderId: "949386162079",
  appId: "1:949386162079:web:047c1d968816ee479e17aa",
  measurementId: "G-G4S1EZ5DSH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db}
export {auth}