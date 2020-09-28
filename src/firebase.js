import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCET67qAlFzxHSQb8otDkG3e52iojwwDR8",
  authDomain: "clone-2ed52.firebaseapp.com",
  databaseURL: "https://clone-2ed52.firebaseio.com",
  projectId: "clone-2ed52",
  storageBucket: "clone-2ed52.appspot.com",
  messagingSenderId: "910759942576",
  appId: "1:910759942576:web:a4c3328e97dd2ca4831e75",
  measurementId: "G-X959GE7VLQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
