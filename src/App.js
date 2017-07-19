import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import styled from 'styled-components';

import './App.css';

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <Title>Welcome to BookMeIn</Title>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
