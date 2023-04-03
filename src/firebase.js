// import firebase from 'firebase'

// const firebaseConfig = {
//     apiKey: "AIzaSyAXJ-zX6byVDPMBs2aD_DXH1O9mAnwn57Y",
//     authDomain: "slack-clone-d796a.firebaseapp.com",
//     databaseURL: "https://slack-clone-d796a-default-rtdb.firebaseio.com",
//     projectId: "slack-clone-d796a",
//     storageBucket: "slack-clone-d796a.appspot.com",
//     messagingSenderId: "1068870677384",
//     appId: "1:1068870677384:web:e1d92319c2b9dca05e803d",
//     measurementId: "G-SBDF2QC93B"
//   };

// const firebaseApp = firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvide();

// export { auth, provider };

// export default db;

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXJ-zX6byVDPMBs2aD_DXH1O9mAnwn57Y",
    authDomain: "slack-clone-d796a.firebaseapp.com",
    databaseURL: "https://slack-clone-d796a-default-rtdb.firebaseio.com",
    projectId: "slack-clone-d796a",
    storageBucket: "slack-clone-d796a.appspot.com",
    messagingSenderId: "1068870677384",
    appId: "1:1068870677384:web:e1d92319c2b9dca05e803d",
    measurementId: "G-SBDF2QC93B"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
