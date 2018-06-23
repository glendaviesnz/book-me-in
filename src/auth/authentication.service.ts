import firebase from '../config/firebase'

import { store } from '../store/redux';
import { removeCurrentUser } from '../user/current-user.actions';
import { checkUserRoles } from './authentication.actions';

export const initAuthRedirect = () => {
  if (firebase.auth) {
    firebase.auth();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.dispatch(checkUserRoles({
          email: user.email,
          loading: false,
          name: user.displayName,
          photoURL: user.photoURL
        }))

      } else {
        store.dispatch(removeCurrentUser());
      }
    });
  }
}

export const authenticate = () => {
  if (firebase.auth) {
    store.dispatch(removeCurrentUser());
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
}

export const logout = () => {
  if (firebase.auth) {
    store.dispatch(removeCurrentUser());
    firebase
      .auth()
      .signOut();
  }
}
