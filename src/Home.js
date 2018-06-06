import * as React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        You are home! <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Home;
