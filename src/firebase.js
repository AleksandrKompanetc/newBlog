// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// import { collection, addDoc } from "firebase/firestore"; 

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4YqZEYGlZOy590Nz3jPp0ikbGk5Ihbgs",
  authDomain: "news-blog-app-47fe1.firebaseapp.com",
  projectId: "news-blog-app-47fe1",
  storageBucket: "news-blog-app-47fe1.appspot.com",
  messagingSenderId: "401838337322",
  appId: "1:401838337322:web:bf87eb29b75d2ba6974253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
