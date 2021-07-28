import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC2d-9SuH6dUG9Ldl1LIgcfESO4QgtIF5Q",
  authDomain: "docs-copy-a3b03.firebaseapp.com",
  projectId: "docs-copy-a3b03",
  storageBucket: "docs-copy-a3b03.appspot.com",
  messagingSenderId: "428435791313",
  appId: "1:428435791313:web:6e086aeae73fbf130d94f0"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = firebase.firestore();

export { db };