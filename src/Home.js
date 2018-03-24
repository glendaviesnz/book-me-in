import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        You are home! <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Home;
