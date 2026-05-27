const FIREBASE_CONFIG = {
  apiKey: "AIzaSyB_w2keSFFl5fg1PQJqaDAXJu-AR7te1YU",
  authDomain: "trainingplaner-754fc.firebaseapp.com",
  projectId: "trainingplaner-754fc",
  storageBucket: "trainingplaner-754fc.firebasestorage.app",
  messagingSenderId: "842218693905",
  appId: "1:842218693905:web:0cb7dc7d44b2224a9f18b0"
};

firebase.initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();
const db   = firebase.firestore();
