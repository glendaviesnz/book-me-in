import { css } from 'emotion'
import * as React from 'react';
import { Link, Route } from 'react-router-dom';

import { default as About } from './About';
import './App.css';
import { default as Events } from './events/Events';

import { default as MenuBar } from './layout/MenuBar';

const appConentStyles = css`
  padding: 30px;
`
const Home = ({ match }: any) => {
  return (
    <div>
      <div className="App">
        <MenuBar />
      </div>
      <div className={appConentStyles}>
        <Link to="/home/about">Go to About</Link>
        <Link to="/home/events">Go to Events</Link>

        <Route path={match.url + '/about'} component={About} />
        <Route path={match.url + '/events'} component={Events} />
      </div>
    </div>
  );
}


export default Home;