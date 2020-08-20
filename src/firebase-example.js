import firebase from "firebase";

const firebaseConfig = {
  apiKey: "YOUR-FIREBASE-API-KEY",
  authDomain: "YOUR-FIREBASE-DOMAIN",
  databaseURL: "YOUR-FIREBASE-DATABASE",
  projectId: "YOUR-FIREBASE-PROJECT-ID",
  storageBucket: "YOUR-FIREBASE-STORAGE",
  messagingSenderId: "YOUR-FIREBASE-MASSAGING",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
