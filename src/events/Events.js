import React from 'react';

import { addToCollection } from '../services/database';

const doDatabase = () => {
  addToCollection('users', {
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  }).subscribe(docRef => {
    console.log('Document written with ID: ', docRef.id);
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
