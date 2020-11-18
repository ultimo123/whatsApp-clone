import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCAZGcz1M5qTDLi9mQnAQ1p7z1HrtFGU4o",
  authDomain: "whatsup-clone-app-ae3b1.firebaseapp.com",
  databaseURL: "https://whatsup-clone-app-ae3b1.firebaseio.com",
  projectId: "whatsup-clone-app-ae3b1",
  storageBucket: "whatsup-clone-app-ae3b1.appspot.com",
  messagingSenderId: "23582165689",
  appId: "1:23582165689:web:823b968440cef3f3bee968",
  measurementId: "G-HK2L66QVJ0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
