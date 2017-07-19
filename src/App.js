import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <h2>Welcome to BookMeIn</h2>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
