import * as firebase from 'firebase';

import { setCurrentUser } from '../store/current-user.actions';
import { store } from '../store/redux';

export const initAuthRedirect = () => {
  firebase
    .auth()
    .getRedirectResult()
    .then((result) => {
      if (result.credential) {
        // let token = result.credential.accessToken;
      }
    })
    .catch((error) => {
      // let errorCode = error.code;
      // let errorMessage = error.message;
      // let email = error.email;
      // let credential = error.credential;
    });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(
        setCurrentUser({
          email: user.email,
          loading: false,
          name: user.displayName,
          photoURL: user.photoURL
        })
      );
    } else {
      store.dispatch(
        setCurrentUser({
          email: null,
          loading: false,
          name: null,
          photoURL: null
          
        })
      );
    }
  });
}

export const authenticate = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
}

export const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch(() => {
      // An error happened.
    });
}
