import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { default as Home } from './Home.js';
import { default as About } from './About.js';
import { default as Events } from './events/Events.js';
import { default as MenuBar } from './layout/MenuBar.js';
import './App.css';

const theme = createMuiTheme();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <div className="App">
              <MenuBar />
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/events" component={Events} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
