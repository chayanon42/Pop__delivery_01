import firebase from 'firebase/app';
import '../components/Auth';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAwCJu8Yy2yDaelTFUKwpn0nv0YwJJmuQo",
  authDomain: "profile-ba52f.firebaseapp.com",
  projectId: "profile-ba52f",
  storageBucket: "profile-ba52f.appspot.com",
  messagingSenderId: "1025154129566",
  appId: "1:1025154129566:web:14dc0d3640c33301fb258f",
  measurementId: "G-MH90E4M5QD"
});

export default firebaseConfig;