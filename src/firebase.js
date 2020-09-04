import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDNMoVZN-iWQYJQEnEZpUeOU-emHRXPoJk",
    authDomain: "facebook-app-clone-ec61c.firebaseapp.com",
    databaseURL: "https://facebook-app-clone-ec61c.firebaseio.com",
    projectId: "facebook-app-clone-ec61c",
    storageBucket: "facebook-app-clone-ec61c.appspot.com",
    messagingSenderId: "110694267633",
    appId: "1:110694267633:web:3b0ee2a9d025343e0b8750",
    measurementId: "G-SGXVYF1P1Y"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;