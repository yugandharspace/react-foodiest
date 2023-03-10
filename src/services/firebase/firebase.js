import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  signOut,
} from 'firebase/auth';
import { getFirestore, setDoc, getDoc, doc } from 'firebase/firestore';

import firebaseConfig from './config';

class Firebase {
  constructor() {
    initializeApp(firebaseConfig);

    this.auth = getAuth();
    this.firestore = getFirestore();
  }

  // Auth API
  signUp = (email, password) =>
    createUserWithEmailAndPassword(this.auth, email, password);

  sendEmailVerification = () =>
    sendEmailVerification(this.auth.currentUser, {
      url: process.env.REACT_APP_EMAIL_CONFIRMATION_REDIRECT,
    });

  signIn = (email, password) =>
    signInWithEmailAndPassword(this.auth, email, password);

  resetPassword = email => sendPasswordResetEmail(this.auth, email);

  updatePassword = password => updatePassword(this.auth.currentUser, password);

  signOut = () => signOut(this.auth);

  // Database API
  addUser = (uid, data) => setDoc(doc(this.firestore, 'users', uid), data);

  getUser = uid => getDoc(doc(this.firestore, 'users', uid));
}

export default Firebase;
