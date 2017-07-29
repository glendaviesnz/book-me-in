import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { default as Home } from './Home.js';
import { default as About } from './About.js';
import { default as MenuBar } from './layout/MenuBar.js';

import './App.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>

        <div className="App">
          <MenuBar />
 
          <Router >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Router>

        </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
