import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAM2idZjHvxBwpHuBSmxL6fEV19QxzUrI",
  authDomain: "react-blog-7662e.firebaseapp.com",
  projectId: "react-blog-7662e",
  storageBucket: "react-blog-7662e.appspot.com",
  messagingSenderId: "962185046849",
  appId: "1:962185046849:web:ad9250987eaed6000ecfc0",
  measurementId: "G-GB7FD971N8"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
