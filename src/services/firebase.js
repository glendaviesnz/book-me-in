import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAx8Mm5oVeds_RaNb4qV04dEqZxijYgEeo',
  authDomain: 'bookmein-5851f.firebaseapp.com',
  databaseURL: 'https://bookmein-5851f.firebaseio.com',
  messagingSenderId: '153823656972',
  projectId: 'bookmein-5851f',
  storageBucket: 'bookmein-5851f.appspot.com'
};

firebase.initializeApp(config);
export default firebase;
