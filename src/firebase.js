import firebase from 'firebase/compat/app';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCf77n0Yq25uUkAuZQ_Q9drmYE3GT0mTl4",
    authDomain: "disneyplusclone-57327.firebaseapp.com",
    projectId: "disneyplusclone-57327",
    storageBucket: "disneyplusclone-57327.appspot.com",
    messagingSenderId: "89546808931",
    appId: "1:89546808931:web:2ea5c7b84b7116043e6256"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore;
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();

  export {auth,provider,storage};
  export default db;
