import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDUUyDtXImyVqAUqVK5f3Sr-w2EwuYDQe8",
  authDomain: "fir-course-d50f7.firebaseapp.com",
  projectId: "fir-course-d50f7",
  storageBucket: "fir-course-d50f7.appspot.com",
  messagingSenderId: "863400658680",
  appId: "1:863400658680:web:4fe9636dd234b758ed5d0d",
  measurementId: "G-LNHN19GCDF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
