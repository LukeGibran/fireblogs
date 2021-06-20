import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDmYqTW17PfbqxBl_0aWBM9vtCf_uBcNH8',
  authDomain: 'fireblog-9f54c.firebaseapp.com',
  projectId: 'fireblog-9f54c',
  storageBucket: 'fireblog-9f54c.appspot.com',
  messagingSenderId: '935056278069',
  appId: '1:935056278069:web:5bc5750032a00127f3a77c',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
