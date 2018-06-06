import * as React from 'react';

import { addToCollection } from '../services/database';

const doDatabase = () => {
  addToCollection('users', {
    born: 1815,
    first: 'Ada',
    last: 'Lovelace',
  }).subscribe(docRef => {
    // console.log('Document written with ID: ', docRef.id);
  });
};
const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      <div onClick={doDatabase}>Database</div>
    </div>
  );
};

export default Events;
