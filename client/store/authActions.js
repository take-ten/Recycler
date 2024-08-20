import { loginStart, loginSuccess, loginFailure } from './authSlice';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, AppleAuthProvider } from 'firebase/auth';
import { auth } from './firebase'

export const handleGoogleLogin = () => async (dispatch) => {
  dispatch(loginStart());
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    dispatch(loginSuccess(result.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const handleFacebookLogin = () => async (dispatch) => {
  dispatch(loginStart());
  const provider = new FacebookAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    dispatch(loginSuccess(result.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

export const handleAppleLogin = () => async (dispatch) => {
  dispatch(loginStart());
  const provider = new AppleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    dispatch(loginSuccess(result.user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};
