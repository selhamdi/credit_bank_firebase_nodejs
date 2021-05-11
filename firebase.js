import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDwxgqe3fIGC30-_HfpQ4vWvugLCv8R2Nw",
  authDomain: "bank-e52c9.firebaseapp.com",
  databaseURL: "https://bank-e52c9-default-rtdb.firebaseio.com",
  projectId: "bank-e52c9",
  storageBucket: "bank-e52c9.appspot.com",
  messagingSenderId: "716497048025",
  appId: "1:716497048025:web:11c8dbb2f6abbae06b89c8",
  measurementId: "G-YVG3YGWPRD"
};
  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;