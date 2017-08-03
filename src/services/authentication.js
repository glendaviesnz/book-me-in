import * as firebase from "firebase";

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
            console.log(user);
        } else {
            // No user is signed in.
        }
    });
}

export function authenticate() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}