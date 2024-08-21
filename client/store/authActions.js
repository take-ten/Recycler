import { signUpStart, signUpSuccess, signUpFailure, signInStart, signInSuccess, signInFailure } from './authSlice';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, createUserWithEmailAndPassword, AppleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';

// Handle Google Sign-In
export const handleGoogleLogin = () => async (dispatch) => {
  dispatch(signInStart());
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    dispatch(signInSuccess(result.user));
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};

// Handle Facebook Sign-In
export const handleFacebookLogin = () => async (dispatch) => {
  dispatch(signInStart());
  const provider = new FacebookAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    dispatch(signInSuccess(result.user));
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};

// Handle Apple Sign-In
export const handleAppleLogin = () => async (dispatch) => {
  dispatch(signInStart());
  const provider = new AppleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    dispatch(signInSuccess(result.user));
  } catch (error) {
    dispatch(signInFailure(error.message));
  }
};

// Handle Sign-Up with Email and Password
export const handleEmailSignUp = (email, password) => async (dispatch) => {
  dispatch(signUpStart());

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(signUpSuccess(result.user));
  } catch (error) {
    dispatch(signUpFailure(error.message));
  }
};
