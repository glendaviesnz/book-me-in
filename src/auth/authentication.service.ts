import firebase from '../config/firebase'

import { setCurrentUser } from '../store/current-user.actions';
import { store } from '../store/redux';

export const initAuthRedirect = () => {
  if (firebase.auth) {
    firebase.auth();
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
    store.dispatch(
      setCurrentUser({
        email: null,
        loading: true,
        name: null,
        photoURL: null
      })
    );
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
}

export const logout = () => {
  if (firebase.auth) {
    firebase
      .auth()
      .signOut();
  }
}
