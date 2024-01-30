import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfQJsFk2jZ5RGuPVPQR3KBJIBfuQ1aCww",
  authDomain: "financial-market-news-bl-6e1ae.firebaseapp.com",
  projectId: "financial-market-news-bl-6e1ae",
  storageBucket: "financial-market-news-bl-6e1ae.appspot.com",
  messagingSenderId: "779612152502",
  appId: "1:779612152502:web:431d647d21e72663957c17"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;













// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
//         const firebaseConfig = {
//           apiKey: "AIzaSyCfQJsFk2jZ5RGuPVPQR3KBJIBfuQ1aCww",
//           authDomain: "financial-market-news-bl-6e1ae.firebaseapp.com",
//           projectId: "financial-market-news-bl-6e1ae",
//           storageBucket: "financial-market-news-bl-6e1ae.appspot.com",
//           messagingSenderId: "779612152502",
//           appId: "1:779612152502:web:431d647d21e72663957c17"
//         };

// // Initialize Firebase
//         const app = initializeApp(firebaseConfig);