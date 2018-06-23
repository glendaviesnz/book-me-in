import { from } from 'rxjs';

import firebase from '../config/firebase';

const database = (firebase as any).firestore();
const settings = {timestampsInSnapshots: true};
database.settings(settings);

export const getCollection = (collection: string) => {
  return from(database.collection(collection).get().then((snapshot: any) => {
    return snapshot.docs.map((doc: any) => doc.data());
  }));
};

export const getDocument = (collection: string, where: string[]) => {
  return from(database.collection(collection).where(...where).get().then((snapshot: any) => {
    return snapshot.docs.map((doc: any) => doc.data());
  }));
};