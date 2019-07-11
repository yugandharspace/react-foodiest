import app from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../config/firebaseConfig';

// const firebase = app.initializeApp(firebaseConfig);
// export default firebase;

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  // Auth API
  signUp = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  verifyEmail = () =>
    this.auth.currentUser.sendEmailVerification({
      url: process.env.REACT_APP_EMAIL_CONFIRMATION_REDIRECT
    });

  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  passwordReset = email => this.auth.sendPasswordResetEmail(email);

  passwordUpdate = password => this.auth.currentUser.updatePassword(password);

  signOut = () => this.auth.signOut();
}

export default Firebase;
