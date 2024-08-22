import React, { useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { signInStart, signInSuccess, signInFailure } from '../store/authSlice';
import { WEB_CLIENT_ID, IOS_CLIENT_ID, ANDROID_CLIENT_ID } from '@env';

WebBrowser.maybeCompleteAuthSession();

const GoogleSignUpButton = () => {
  const dispatch = useDispatch();
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: WEB_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
    webClientId: WEB_CLIENT_ID,
    redirectUri: 'https://auth.expo.io/@cikond91/client', // Ensure this is set correctly
  });

  useEffect(() => {
    console.log('Google sign-in response:', response);
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const googleCredential = GoogleAuthProvider.credential(id_token);
      signUpWithFirebase(googleCredential);
    } else {
      console.log('Google sign-in response type:', response?.type);
    }
  }, [response]);

  const signUpWithFirebase = async (googleCredential) => {
    console.log('Starting Firebase sign-up with credential:', googleCredential);
    dispatch(signInStart());
    try {
      const result = await signInWithCredential(auth, googleCredential);
      console.log('Firebase sign-in result:', result);
      const firebaseUser = result.user;

      // Check if user already exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      if (!userDoc.exists()) {
        console.log('User does not exist in Firestore, creating new user');
        // Add new user to Firestore
        await setDoc(doc(db, 'users', firebaseUser.uid), {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          role: 'provider', // Assign a default role
          location: null // You can update this later with actual location
        });
      } else {
        console.log('User already exists in Firestore');
      }

      dispatch(signInSuccess(firebaseUser));
      console.log('Firebase sign-up successful:', firebaseUser);
    } catch (error) {
      dispatch(signInFailure(error.message));
      console.error('Error during Firebase sign-up:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.socialButton} onPress={() => {
      console.log('Google sign-up button pressed');
      promptAsync();
    }}>
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

export default GoogleSignUpButton;