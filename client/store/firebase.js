import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyDjYHxEt_3ZseJtJ-mKjgNM_3e40F0smF0',
  authDomain: "recyclerbk.firebaseapp.com",
  projectId: "recyclerbk",
  storageBucket: "recyclerbk.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
