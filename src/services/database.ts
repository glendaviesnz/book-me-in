import 'firebase/firestore';
import { from } from 'rxjs';

import firebase from '../config/firebase';

const database = firebase.firestore();

export const addToCollection = (collection: any, data: any) => {
  const dbCall = database.collection(collection).add(data);
  return from(dbCall);
};
