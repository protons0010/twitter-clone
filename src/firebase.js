// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb0VJELWiJNZE8jPhtgKHO19MXQI70z2Q",
  authDomain: "twitter-clone-91689.firebaseapp.com",
  projectId: "twitter-clone-91689",
  storageBucket: "twitter-clone-91689.appspot.com",
  messagingSenderId: "956800558638",
  appId: "1:956800558638:web:52fcef0aa7149d7746a1bf",
  measurementId: "G-0BBFFP67BV"
};

  
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;