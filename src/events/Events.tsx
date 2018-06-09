import * as React from 'react';

import { getCollection } from '../services/database';

// const doDatabase = () => {
//   addToCollection('users', {
//     born: 1815,
//     first: 'Ada',
//     last: 'Lovelace',
//   }).subscribe(docRef => {
//     // console.log('Document written with ID: ', docRef.id);
//   });
// };

const doDatabase = () => {
  getCollection('users').subscribe((data: any) => {
       data.forEach((user: any) => {
        
        if (user) {
           // lklk
         }
       })
  })
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
