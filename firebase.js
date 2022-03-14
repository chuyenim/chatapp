// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB66rCsbac6XBEFGj-tusYyy3_Mnp50fe4",
  authDomain: "new-project-1535212816077.firebaseapp.com",
  databaseURL: "https://new-project-1535212816077.firebaseio.com",
  projectId: "new-project-1535212816077",
  storageBucket: "new-project-1535212816077.appspot.com",
  messagingSenderId: "826089039070",
  appId: "1:826089039070:web:9d1075ea250454bcccce4f",
  measurementId: "G-VN18V2YQZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };
