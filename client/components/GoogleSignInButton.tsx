import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { signInStart, signInSuccess, signInFailure } from '../store/authSlice';
import { WEB_CLIENT_ID } from '@env';

WebBrowser.maybeCompleteAuthSession();

const GoogleSignInButton = () => {
  const dispatch = useDispatch();
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: WEB_CLIENT_ID,
    iosClientId: WEB_CLIENT_ID,
    androidClientId: WEB_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const googleCredential = GoogleAuthProvider.credential(id_token);
      signInWithFirebase(googleCredential);
    }
  }, [response]);

  const signInWithFirebase = async (googleCredential) => {
    dispatch(signInStart());
    try {
      const result = await signInWithCredential(auth, googleCredential);
      const firebaseUser = result.user;

      // Check if user already exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (!userDoc.exists()) {
        // Add new user to Firestore
        await setDoc(doc(db, 'users', firebaseUser.uid), {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          role: 'provider', // Assign a default role
          location: null // You can update this later with actual location
        });
      }

      dispatch(signInSuccess(firebaseUser));
    } catch (error) {
      dispatch(signInFailure(error.message));
      console.error("Error during Google sign-in: ", error);
    }
  };

  return (
    <TouchableOpacity style={styles.socialButton} onPress={() => promptAsync()}>
      <Icon name="google" size={30} color="#db4437" />
    </TouchableOpacity>
  );
};

const styles = {
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
};

export default GoogleSignInButton;