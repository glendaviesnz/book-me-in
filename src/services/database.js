import firebase from './firebase';
import 'firebase/firestore';
import { Observable } from 'rxjs';

const database = firebase.firestore();

export const addToCollection = (collection, data) => {
  const dbCall = database.collection(collection).add(data);
  return Observable.from(dbCall);
};
