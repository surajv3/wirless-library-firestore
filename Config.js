import * as firebase from 'firebase'
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBfXxrL1hLinSP3Bshia70o1Xe7-Fi-TIU",
    authDomain: "willie-app-5ae90.firebaseapp.com",
    projectId: "willie-app-5ae90",
    storageBucket: "willie-app-5ae90.appspot.com",
    messagingSenderId: "317474821420",
    appId: "1:317474821420:web:43c0e4ae315a0948cf0889"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore