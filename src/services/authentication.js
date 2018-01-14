import * as firebase from "firebase";
import { store } from '../store/redux';
import { setCurrentUser } from '../store/current-user.actions';

export function initAuthRedirect() {

    firebase.auth().getRedirectResult().then(function (result) {
        if (result.credential) {
            // let token = result.credential.accessToken;
        }
    }).catch(function (error) {
        // let errorCode = error.code;
        // let errorMessage = error.message;
        // let email = error.email;
        // let credential = error.credential;
    });
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            store.dispatch(setCurrentUser({
                name: user.displayName, 
                email: user.email,
                photoURL: user.photoURL,
                loading: false
            }))
        } else {
            store.dispatch(setCurrentUser({
                name: null, 
                email: null,
                photoURL: null,
                loading: false
            }))
        }
    });
}

export function authenticate() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}

export function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}