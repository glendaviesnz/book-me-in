import React from 'react';
import { Link } from 'react-router-dom';
import { addToCollection } from './services/database';

const doDatabase = () => {
  addToCollection('users', {
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  }).subscribe(docRef => {
    console.log('Document written with ID: ', docRef.id);
  });
};
const About = () => {
  return (
    <div>
      What is this about? <Link to="/">Go to home</Link>
      <div onClick={doDatabase}>Database</div>
    </div>
  );
};

export default About;
