import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyAx8Mm5oVeds_RaNb4qV04dEqZxijYgEeo",
    authDomain: "bookmein-5851f.firebaseapp.com",
    databaseURL: "https://bookmein-5851f.firebaseio.com",
    projectId: "bookmein-5851f",
    storageBucket: "bookmein-5851f.appspot.com",
    messagingSenderId: "153823656972"
};

export function initFirebase() {
    firebase.initializeApp(config);
}
