import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBWAbQoZw4sNbRjQlb5qt9y_PVJOn3nVYo",
  authDomain: "lasttest-634fd.firebaseapp.com",
  projectId: "lasttest-634fd",
  storageBucket: "lasttest-634fd.appspot.com",
  messagingSenderId: "767513736665",
  appId: "1:767513736665:web:6d1f43b4882341ec1b95c8"
};
  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;