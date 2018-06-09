import firebase from '../config/firebase'


import { setCurrentUser } from '../store/current-user.actions';
import { store } from '../store/redux';

export const initAuthRedirect = () => {
  if (firebase.auth) {
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
}

export const authenticate = () => {
  if (firebase.auth) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result: any) => {
      const x = 1;
      if (x && result) {
        // test
      }
    });
  }
}

export const logout = () => {
  if (firebase.auth) {
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
}
