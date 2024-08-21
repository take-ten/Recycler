import { db } from '../config/firebase';
import { setDoc, doc } from 'firebase/firestore';

// Add a new user to Firestore
export const addUser = async (user) => {
  try {
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      role: user.role,
      location: user.location
    });
    console.log("User added successfully");
  } catch (error) {
    console.error("Error adding user: ", error);
  }
};